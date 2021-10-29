import React, { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import back from "../../Assets/UI_Forum/Arrow-Left.svg";

export const InpustEditInterships = ({
  Title,
  Job,
  Careers,
  Workday,
  SalaryRange,
  Body,
  What_we_want_you_todo,
  TechnicalRequirements,
  Education_Experience,
}) => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/CreatesInterships");
  };

  const [inputSkills, setInputSkills] = useState([{ skill: "" }]);

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
  const [inputsEducation, setInputsEducation] = useState([{ education: "" }]);

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
  const [inputsCareers, setInputsCareers] = useState([{ career: "" }]);

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

  return (
    <>
      <div>
        <div className="flex justify-between">
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Titulo: </strong>
          </p>
          <input
            required={true}
            className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
            type="text"
            value={Title}
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
          <textarea
            className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-18 resize-none"
            required={true}
            value={Body}
          ></textarea>
          <br />
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Detalles Generales: </strong>
          </p>
          <textarea
            className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-36 resize-none"
            required={true}
            value={What_we_want_you_todo}
          ></textarea>
          <br />
          <br />

          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Habilidades Requeridas: </strong>
          </p>
          {TechnicalRequirements.map((req, index) => (
            <>
              <div key={index} className="flex justify-between">
                <input
                  required={true}
                  className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                  placeholder="Donimino de Office 2019, Excel Avanzado, etc."
                  type="text"
                  value={req.skill}
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
              <br />
            </>
          ))}
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Educacion y Experecia: </strong>
          </p>
          {Education_Experience.map((edu, index) => (
            <div key={index} className="flex justify-between">
              <input
                required={true}
                className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                type="text"
                value={edu.education}
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
            <input
              required={true}
              className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              value={Job}
            />
          </p>
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Carreras Asociadas: </strong>
          </p>
          {Careers.map((career, index) => (
            <div key={index} className="flex justify-between">
              <input
                required={true}
                className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                type="text"
                value={career.career}
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
            <input
              required={true}
              className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              value={Workday}
            />
          </p>
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Salario: </strong>
            <input
              required={true}
              className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              value={SalaryRange}
            />
          </p>
        </div>
      </div>
    </>
  );
};
