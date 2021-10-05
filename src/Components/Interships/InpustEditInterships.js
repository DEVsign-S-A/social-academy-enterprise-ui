import React from "react";
import { useHistory } from "react-router";
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
  return (
    <>
      <div>
        <div className="flex justify-between">
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Titulo: </strong>
          </p>
          <input
            required={true}
            className="mx-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
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
            className="mx-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-28 resize-none"
            required={true}
            value={Body}
          ></textarea>
          <br />
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Detalles Generales: </strong>
          </p>
          <textarea
            className="mx-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-40 resize-none"
            required={true}
            value={What_we_want_you_todo}
          ></textarea>
          <br />
          <br />

          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Habilidades Requeridas: </strong>
          </p>
          {TechnicalRequirements.map((req) => (
            <>
              <input
                required={true}
                className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                type="text"
                value={req}
              />
              <br />
            </>
          ))}
          <br />
          <p className="font-Poppins text-gray-600 font-medium">
            <strong>Educacion y Experecia: </strong>
          </p>
          {Education_Experience.map((edu) => (
            <input
              required={true}
              className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              value={edu}
            />
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
          {Careers.map((career) => (
            <input
              required={true}
              className="mx-3 my-2 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
              value={career}
            />
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
