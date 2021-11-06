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
    const { infoBussines } = getState().bussines;

    console.log("pase");
    try {
      const newIntership = {
        EnterpriseID: uid,
        EmpresaInfo: infoBussines,
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

      console.log(doc);
    } catch (e) {
      Swal.fire("Erorr", e, "warning");
    }
  };
};

export const startLoadingInterships = () => {
  return async (dispatch) => {
    const infoBussines = [];

    const infoSnapGeneral = await db
      .collection(`/Pasantias/Publicacion/Data/`)
      .get();

    infoSnapGeneral.forEach((snap) => {
      infoBussines.push({
        id: snap.id,
        ...snap.data(),
      });
    });

    console.log(infoBussines);

    dispatch(LoadInterships(infoBussines));
  };
};

export const startUpdatingIntership = (
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
    
  };
};

const LoadInterships = (data) => ({
  type: types.loadIntership,
  payload: data,
});
