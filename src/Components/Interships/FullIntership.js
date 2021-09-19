import React from "react";
import { Redirect, useHistory, useParams } from "react-router";
import { getIntershipById } from "../../Services/getIntershipById";
/* 
    Images
 */
// import back from "../../Assets/UI_Forum/Arrow-Left.svg";
import send from "../../Assets/UI_Intership/Send.svg";
import Mail from "../../Assets/UI_Intership/Mail.svg";
import Smartphone from "../../Assets/UI_Intership/Smartphone.svg";
import pin from "../../Assets/UI_Intership/Pin.svg";
import buil from "../../Assets/UI_Intership/buil.svg";

export const FullIntership = () => {
  const { IdIntership } = useParams();

  const intership = getIntershipById(IdIntership);

  if (!intership) {
    <Redirect to="/PageNoFound" />;
  }
  const history = useHistory();

  const handleBack = () => {
    history.push("/CreatesInterships");
  };

  const {
    Title,
    Company,
    Job,
    Careers,
    Workday,
    SalaryRange,
    Body,
    What_we_want_you_todo,
    TechnicalRequirements,
    Education_Experience,
  } = intership;

  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <div className='rounded-lg bg-gray-50 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-200'>
          <div className="grid grid-cols-4 gap-3 my-2">
            <div className="mx-3 my-2 flex flex-col border-r-2 border-gray-300">
              <img
                src={Company.ProfilePhoto}
                alt={Company.CompanyName}
                className="rounded-full w-96 ring-1 ring-gray-300"
              />

              <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                <img src={buil} alt="buil" className="mx-2" />
                <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                  <strong>Nombre del negocio: </strong>
                  {Company.CompanyName}
                </p>
              </div>
              <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                <img src={pin} alt="buil" className="mx-2" />
                <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                  <strong>Dirección: </strong>
                  {Company.Direction}
                </p>
              </div>
              <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                <img src={Smartphone} alt="Smartphone" className="mx-2" />
                <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                  <strong>telf: </strong>
                  +505-25050-23
                </p>
              </div>
              <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                <img src={Mail} alt="Mail" className="mx-2" />
                <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                  <strong>Correo: </strong>
                  Email@mail.com
                </p>
              </div>
            </div>
            <div className="col-span-3">
              <div>
                <div className="flex justify-between">
                  <p className="y-3 font-Poppins text-xl font-semibold text-gray-700">
                    {Title}
                  </p>
                  <button
                    className="flex outline-none px-3 py-2 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer float-right"
                    onClick={handleBack}
                  >
                    {/* <img src={back} alt="back" className="mt-2 mx-2" /> */}
                    Regresar
                  </button>
                </div>

                <div>
                  <br />

                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Descrpción: </strong>
                    {Body}
                  </p>
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Detalles Generales: </strong>
                    {What_we_want_you_todo}
                  </p>
                  <br />

                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Habilidades Requeridas: </strong>
                  </p>
                  {TechnicalRequirements.map((req) => (
                    <li className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                      {req}
                    </li>
                  ))}
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Educacion y Experecia: </strong>
                  </p>
                  {Education_Experience.map((edu) => (
                    <li className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                      {edu}
                    </li>
                  ))}
                </div>
                <div>
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Puesto de Trabajo: </strong>
                    {Job}
                  </p>
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Carreras Asociadas: </strong>
                  </p>
                  {Careers.map((career) => (
                    <li className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                      {career}
                    </li>
                  ))}
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Jornada Laboral: </strong>
                    {Workday}
                  </p>
                  <br />
                  <p className="font-Poppins text-gray-600 font-medium">
                    <strong>Salario: </strong>
                    {SalaryRange}
                  </p>
                </div>
              </div>
            </div>
            <button className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3 py-3 rounded-lg mx-3 justify-center items-center">
              <img src={send} alt="send" className="mx-1" />
              <p>Guardar</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
