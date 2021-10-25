import Swal from "sweetalert2";
import { db } from "../../firebase/firebase-config";
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
		const { uid } = getState().auth;
		console.log("pase");
		try {
			const newIntership = {
				Titulo: titulo,
				DescripcionBreve: descBreve,
				DescripcionLarga: descLarga,
				Habilidades: inputSkills,
				Educacion: inputsEducation,
				Carreras: inputsCareers,
				Puesto: puesto,
				Jornada: jornada,
				Salario: salario,
				Fecha: new Date().getTime(),
			};

			const doc = await db
				.collection(`/Enterprises/${uid}/Pasantias/`)
				.add(newIntership);
		} catch (e) {
			Swal.fire("Erorr", e, "warning");
		}
	};
};
