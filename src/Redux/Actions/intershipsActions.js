import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { retornaDocumentos } from "../../Helpers/retornaDocumentos";
import { types } from "../../Types/type";

export const SaveNewIntership = (
	titulo,
	descBreve,
	descLarga,
	inputSkills,
	inputsEducation,
	inputsCareers,
	puesto,
	jornada,
	salario
) => {
	return async (dispatch, getState) => {
		const MyUser = getState().auth;

		// console.log("pase");
		try {
			const newIntership = {
				EnterpriseID: MyUser.uid,
				EmpresaInfo: MyUser,
				Titulo: titulo,
				DescripcionBreve: descBreve,
				DescripcionLarga: descLarga,
				Habilidades: inputSkills,
				Educacion: inputsEducation,
				Carreras: inputsCareers,
				Puesto: puesto,
				Jornada: jornada,
				Salario: salario,
				solictudesRespustas: [],
				Fecha: new Date().getTime(),
			};

			const doc = await db
				.collection(`/Pasantias/Publicacion/Data/`)
				.add(newIntership);

			await  db
				.collection(`/Pasantias/Publicacion/Data/`).doc(doc.id).update({
					internshipID: doc.id
				})
		} catch (e) {
			Swal.fire("Erorr", e, "warning");
		}
	};
};

export const startLoadingInterships = () => {
	return async (dispatch, getState) => {
		const {uid} = getState().auth;
		const infoBussines = [];

		const infoSnapGeneral = await db
			.collection(`/Pasantias/Publicacion/Data/`)
			.where("EnterpriseID", "==", uid)
			.get();

		infoSnapGeneral.forEach((snap) => {
			infoBussines.push({
				id: snap.id,
				...snap.data(),
			});
		});

		dispatch(LoadInterships(infoBussines));
	};
};

export const startUpdatingIntership = (
	IdIntership,
	titulo,
	descBreve,
	descLarga,
	inputSkills,
	inputsEducation,
	inputsCareers,
	puesto,
	jornada,
	salario
) => {
	return async (dispatch) => {
		try {
			const usuariosRef = db.collection("/Pasantias/Publicacion/Data/");
			await usuariosRef.doc(IdIntership).update({
				Carreras: inputsCareers,
				DescripcionBreve: descBreve,
				DescripcionLarga: descLarga,
				Educacion: inputsEducation,
				Habilidades: inputSkills,
				Jornada: jornada,
				Puesto: puesto,
				Salario: salario,
				Titulo: titulo,
			});
			dispatch(startLoadingInterships());
			Swal.fire("Actualizado", "Se actualizo correctamente", "success");
		} catch (error) {
			Swal.fire("Erorr", error, "warning");
		}
	};
};

export const getUserInfo = (uid) => {
	return async (dispatch) => {
		const usuariosRef = db.collection("UsuarioAcademico");
		const usuarioInfo = usuariosRef
			.where("uid", "==", uid)
			.get()
			.then(retornaDocumentos);
		const usuario = await usuarioInfo.then((resolve) => {
			return resolve;
		});
		if (usuario.length === 0) {
			dispatch(userDoesNotExist());
		} else {
			const user = usuario[0];
			dispatch(userExists(user));
		}
	};
};



export const startDeleteResponseInterships = (
	IdIntership,
	loadInter,
	indexArray
) => {
	return async (dispatch) => {
		try {
			let { solictudesRespustas } = loadInter;

			solictudesRespustas.splice(indexArray, 1);
			// // console.log(solictudesRespustas);
			const usuariosRef = db.collection("Pasantias/Publicacion/Data");
			await usuariosRef.doc(IdIntership).update({
				solictudesRespustas: solictudesRespustas,
			});
			Swal.fire("Pasantía", "Has Removido al usuario con éxito", "success");
			dispatch(startLoadingInterships());
		} catch (error) {
			// console.log(error);
		}
	};
};

export const startDeleteInterships = (
	IdIntership,
) => {
	return async (dispatch) => {
		try {

			// // console.log(solictudesRespustas);
			const usuariosRef = db.collection("Pasantias/Publicacion/Data");
			await usuariosRef.doc(IdIntership).delete();
			Swal.fire("Pasantía", "Has Removido la pasantia con éxito", "success");
			dispatch(startLoadingInterships());
		} catch (error) {
			// console.log(error);
		}
	};
};



const LoadInterships = (data) => ({
	type: types.loadIntership,
	payload: data
});

export const userExists = (userInfo) => ({
	type: types.userExists,
	payload: {
		...userInfo,
	},
});

export const userDoesNotExist = () => ({
	type: types.userDoesnot,
});
