import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { types } from "../../Types/type";
import { fileUpload } from "../../Helpers/fileUpload";
import { retornaDocumentos } from "../../Helpers/retornaDocumentos";
import { login } from "./authAction";

export const createNewProfile = (uid, name, email) =>{
    return async () =>{
        const newPyme = {
			uid,
			nombreEmpresa: name,
			email,
			fotoPerfil: 'https://res.cloudinary.com/socialacademy/image/upload/v1635096147/Social%20Academy%20Image/IconosRecursos/AvatarProfile_iudmkb.jpg',
			sectorComercial: '',
			telefono: '',
			celular: '',
			fechaCreacion: new Date().getTime(),
			descripcion: '',
			direccion: '',
			tipoCompannia: '',
			datosLaborales: '',
			extras: ''
		}
        try {
            await db.collection("Enterprises").doc(`${uid}`).set(newPyme);
        } catch (e) {
            // console.log(e);
        }
    }
}


export const updateBusinessProfile = (pymeInfo) => {
    return async (dispatch) =>{
        try {
            Swal.fire({
                title: 'Espere',
                text: 'Actualizando perfil',
                allowOutsideClick: false,
                didOpen: ()=>{
                    Swal.showLoading();
                }
            });
            const {uid} = pymeInfo;
            const usuariosRef = db.collection("Enterprises");
            await usuariosRef.doc(uid).set(pymeInfo);
            dispatch(activeUser(uid));
            Swal.close();
        } catch (e) {
            // console.log(e);
        }
    }
}

export const startUploadNewPhoto = (file, uid) =>{
    return async (dispatch) =>{
        Swal.fire({
            title: 'Espere',
            text: 'Subiendo foto',
            allowOutsideClick: false,
            didOpen: ()=>{
                Swal.showLoading();
            }
        });
		
        const photoURL = await fileUpload(file);
        const usuariosRef = db.collection("Enterprises");
        await usuariosRef.doc(uid).update({
            fotoPerfil: photoURL
        });
        dispatch(activeUser(uid));
        Swal.close();
    }
}

export const activeUser = (uid) =>{
	return async (dispatch) =>{
		try {
			const usuarioRef = db.collection("Enterprises");
			const usuarioActivo = await usuarioRef.where("uid", "==", uid).get().then(retornaDocumentos);
			dispatch(login(usuarioActivo[0]));
		} catch (error) {
			// console.log(error);
		}
	}
}

export const existeUsuario = async (uid) => {
	const usuariosRef = db.collection("Enterprises");
	const usuarios = usuariosRef
		.where("uid", "==", uid)
		.get()
		.then(retornaDocumentos);
	const existe = await usuarios.then((resolve) => {
		return resolve;
	});
	if (existe.length === 0) {
		return false;
	} else if (existe.length > 0) {
		return true;
	}
};


/*export const startNewInfo = (
	CompanyName,
	SectorComercial,
	Phone,
	Cellphone,
	correo,
	info,
	Direction,
	TypeCompany,
	masinfo,
	extras
) => {
	return async (dispatch, getState) => {
			const { uid } = getState().auth;

		const newInfo = {
			NombreComercial: CompanyName,
			SectorComercial: SectorComercial,
			Correo: correo,
			Celular: Cellphone,
			Telefono: Phone,
			Fecha: new Date().getTime(),
		};

		const doc = await db
			.collection(`/Enterprises/${uid}/InfoGeneral/`)
			.add(newInfo);

		// console.log(doc);
	};
};

export const startEditInfo = (
	CompanyName,
	SectorComercial,
	Phone,
	Cellphone,
	correo
) => {
	return async (dispatch, getState) => {
		try {
			const { uid } = getState().auth;
			const { infoBussines } = getState().bussines;
			const { id } = infoBussines[0];

			const dataToFirestore = {
				Celular: Cellphone,
				Correo: correo,
				NombreComercial: CompanyName,
				SectorComercial: SectorComercial,
				Telefono: Phone,
			};

			await db
				.doc(`Enterprises/${uid}/InfoGeneral/${id}`)
				.update(dataToFirestore);
		} catch (e) {
			Swal.fire("Erorr", e, "warning");
		}
	};
};

export const startMoreinfo = (
	info,
	Direction,
	TypeCompany,
	masinfo,
	extras
) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		// console.log("Dispacth: ", info, Direction, TypeCompany, masinfo, extras);

		const moreInfo = {
			Descripcion: info,
			Direccion: Direction,
			TipoCompannia: TypeCompany,
			DatosLaborales: masinfo,
			Extras: extras,
		};

		const doc = await db
			.collection(`/Enterprises/${uid}/InfoExtra/`)
			.add(moreInfo);

		// console.log(doc);
	};
};

export const startEditMoreInfo = (
	info,
	Direction,
	TypeCompany,
	masinfo,
	extras
) => {
	return async (dispatch, getState) => {
		try {
			const { uid } = getState().auth;
			const { infoBussines } = getState().bussines;
			const { id } = infoBussines[1];

			const dataToFirestore = {
				Descripcion: info,
				Direccion: Direction,
				TipoCompannia: TypeCompany,
				DatosLaborales: masinfo,
				Extras: extras,
			};

			await db
				.doc(`Enterprises/${uid}/InfoExtra/${id}`)
				.update(dataToFirestore);
		} catch (e) {
			Swal.fire("Erorr", e, "warning");
		}
	};
};*/

export const loadInfo = (uid) => {
	return async (dispatch) => {
		const infoSnapGeneral = await db
			.collection(`/Enterprises/${uid}/InfoGeneral`)
			.get();
		const infoSnapExtra = await db
			.collection(`/Enterprises/${uid}/InfoExtra`)
			.get();
		const infoBussines = [];

		infoSnapGeneral.forEach((snap) => {
			infoBussines.push({
				id: snap.id,
				...snap.data(),
			});
		});

		infoSnapExtra.forEach((snap) => {
			infoBussines.push({
				id: snap.id,
				...snap.data(),
			});
		});
		dispatch(LoadInformationBussines(infoBussines));
	};
};

const LoadInformationBussines = (data) => ({
	type: types.loadInfo,
	payload: data,
});
