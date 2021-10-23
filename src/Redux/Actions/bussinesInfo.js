import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
import { types } from "../../Types/type";

export const startNewInfo = (
	CompanyName,
	SectorComercial,
	Phone,
	Cellphone,
	correo
) => {
	return async (dispatch, getState) => {
		console.log(
			"dispacth",
			CompanyName,
			SectorComercial,
			Phone,
			Cellphone,
			correo
		);
		const { uid } = getState().auth;

		const newInfo = {
			NombreComercial: CompanyName,
			SectorComercial: SectorComercial,
			Correo: correo,
			Celular: Cellphone,
			Telefono: Phone,
			Date: new Date().getTime(),
		};

		const doc = await db
			.collection(`/Enterprises/${uid}/InfoGeneral/`)
			.add(newInfo);

		console.log(doc);
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
		console.log("Dispacth: ", info, Direction, TypeCompany, masinfo, extras);

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

		console.log(doc);
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
};


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
