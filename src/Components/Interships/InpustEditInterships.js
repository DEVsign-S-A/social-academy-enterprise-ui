import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import back from "../../Assets/UI_Forum/Arrow-Left.svg";
import send from "../../Assets/UI_Intership/Send.svg";
import { useForm } from "../../Hook/useForm";
import { startUpdatingIntership } from "../../Redux/Actions/intershipsActions";

export const InpustEditInterships = ({
  Title: TitleIntership,
  Workday: WorkdayIntership,
  SalaryRange: SalaryRangeIntership,
  Body: BodyIntership,
  What_we_want_you_todo: What_we_want_you_todoIntership,
  Job: JobIntership,
  Careers,
  TechnicalRequirements,
  Education_Experience,
}) => {

  const dispatch = useDispatch();

  const history = useHistory();

  const handleBack = () => {
    history.push("/CreatesInterships");
  };

  const [inputSkills, setInputSkills] = useState(TechnicalRequirements);

  const handleChanges = (index, event) => {
    event.preventDefault();
    const values = [...inputSkills];
    values[index][event.target.name] = event.target.value;
    setInputSkills(values);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    setInputSkills([...inputSkills, { skill: "" }]);
  };

  const handleRemoveSkill = (index, event) => {
    event.preventDefault();
    if (inputSkills.length <= 1) {
      Swal.fire(
        "Error",
        "Debe de incluir al menos un parametro en relacion a las habilidades",
        "warning"
      );
      return;
    }

    const values = [...inputSkills];
    values.splice(index, 1);
    setInputSkills(values);
  };

  /*****************------------------ */

  /*****Otra Opcion */
  const [inputsEducation, setInputsEducation] = useState(Education_Experience);

  const handleChangesEducation = (index, event) => {
    event.preventDefault();
    const values = [...inputsEducation];
    values[index][event.target.name] = event.target.value;
    setInputsEducation(values);
  };

  const handleAddEducation = (event) => {
    event.preventDefault();
    setInputsEducation([...inputsEducation, { education: "" }]);
  };

  const handleRemoveEducation = (index, event) => {
    event.preventDefault();
    if (inputsEducation.length <= 1) {
      Swal.fire(
        "Error",
        "Debe de incluir al menos un parametro en relacion a la educaion",
        "warning"
      );
      return;
    }

    const values = [...inputsEducation];
    values.splice(index, 1);
    setInputsEducation(values);
  };

  /*****************------------------ */

  /*****Otra Opcion */
  const [inputsCareers, setInputsCareers] = useState(Careers);

  const handleChangesCareers = (index, event) => {
    event.preventDefault();
    const values = [...inputsCareers];
    values[index][event.target.name] = event.target.value;
    setInputsCareers(values);
  };

  const handleAddCareers = (event) => {
    event.preventDefault();
    setInputsCareers([...inputsCareers, { career: "" }]);
  };

  const handleRemoveCareers = (index, event) => {
    event.preventDefault();
    if (inputsCareers.length <= 1) {
      Swal.fire(
        "Error",
        "Debe de incluir al menos una carrera asociada la publicación",
        "warning"
      );
      return;
    }

    const values = [...inputsCareers];
    values.splice(index, 1);
    setInputsCareers(values);
  };

  const [formValues, handleInputChange] = useForm({
    Title: TitleIntership,
    Body: BodyIntership,
    What_we_want_you_todo: What_we_want_you_todoIntership,
    SalaryRange: SalaryRangeIntership,
    Workday: WorkdayIntership,
    Job: JobIntership,
  });

  const { Title, Body, What_we_want_you_todo, SalaryRange, Workday, Job } =
    formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startUpdatingIntership(
      Title, 
      Body, 
      What_we_want_you_todo, 
      inputSkills,
      inputsEducation,
      inputsCareers, 
      Job, 
      Workday, 
      SalaryRange, 
    ));
  };

  return (
    <>
      <form className="w-11/12 " onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Titulo: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-2 pb-2 text-1.5s">
            Se específico y puntual por favor (Maximo 100 caracteres)
          </p>
          <input
            required={true}
            className="mx-2 text-1.5s w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
            type="text"
            value={Title}
            name="Title"
            onChange={handleInputChange}
          />
          <button
            className="flex outline-none px-6 py-2 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer float-right"
            onClick={handleBack}
          >
            <img src={back} alt="back" className="mt-2 mx-1" />
            Regresar
          </button>
        </div>

        <div>
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Descripcion: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Se breve y expresa en pocas palabras lo que deseas transmitir
            (Maximo 350 caracteres)
          </p>
          <textarea
            className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-28 resize-none"
            required={true}
            value={Body}
            name="Body"
            onChange={handleInputChange}
          ></textarea>
          <br />
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Detalles Generales: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Descripcion completa y general de la pasantía
          </p>
          <textarea
            className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-56 resize-none"
            required={true}
            value={What_we_want_you_todo}
            name="What_we_want_you_todo"
            onChange={handleInputChange}
          ></textarea>
          <br />
          <br />

          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Habilidades Requeridas: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Añade las Habilidades necesarias e indispinsables para desempeñar la
            labor en cuestion (individualmente)
          </p>
          {inputSkills.map((inputSkill, index) => (
            <div key={index} className="flex justify-between">
              <input
                type="text"
                className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                placeholder="Donimino de Office 2019, Excel Avanzado, etc."
                name="skill"
                label="skill"
                value={inputSkill.skill}
                onChange={(event) => handleChanges(index, event)}
              />
              <button
                onClick={(event) => handleRemoveSkill(index, event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                -
              </button>
              <button
                onClick={(event) => handleAddSkill(event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                +
              </button>
            </div>
          ))}
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Educacion y Experecia: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Agrega los conociemtos en educaion o niveles de esta requeridos
            (individualmente)
          </p>
          {inputsEducation.map((inputEducation, index) => (
            <div key={index} className="flex justify-between">
              <input
                type="text"
                className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                placeholder="Diploma de bachiller, 3 año de universidad, etc."
                name="education"
                label="education"
                value={inputEducation.education}
                onChange={(event) => handleChangesEducation(index, event)}
              />
              <button
                onClick={(event) => handleRemoveEducation(index, event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                -
              </button>
              <button
                onClick={(event) => handleAddEducation(event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                +
              </button>
            </div>
          ))}
        </div>
        <div>
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Puesto de Trabajo: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Coloca el puesto de trabajo en concreto (Maximo 100 caracteres)
          </p>
          <input
            required={true}
            className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
            type="text"
            value={Job}
            name="Job"
            onChange={handleInputChange}
          />
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Carreras Asociadas: </strong>
            <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
              Anexa las carreras asociadas o relacionadas al puesto en cuestion
            </p>
          </p>
          {inputsCareers.map((inputCareers, index) => (
            <div key={index} className="flex justify-between">
              <input
                type="text"
                className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                placeholder="Comunicación, Mercadotecnia, Adiministración de empresas, etc."
                name="career"
                label="career"
                value={inputCareers.career}
                onChange={(event) => handleChangesCareers(index, event)}
              />
              <button
                onClick={(event) => handleRemoveCareers(index, event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                -
              </button>
              <button
                onClick={(event) => handleAddCareers(event)}
                className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
              >
                +
              </button>
            </div>
          ))}
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Jornada Laboral: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2 text-1.5s">
            Coloca la jornada laboral a la cual se sometera el pasante (Maximo
            100 caracteres)
          </p>
          <input
            required={true}
            className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
            type="text"
            value={Workday}
            name="Workday"
            onChange={handleInputChange}
          />
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Salario: </strong>
          </p>
          <p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
            coloca el salario
          </p>
          <input
            required={true}
            className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
            type="text"
            value={SalaryRange}
            name="SalaryRange"
            onChange={handleInputChange}
          />
        </div>
        <button
          onClick={handleSubmit}
          className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3 py-3 rounded-lg mx-3 justify-center items-center"
        >
          <img src={send} alt="send" className="mx-1" />
          <p>Guardar</p>
        </button>
      </form>
    </>
  );
};
