import React from "react";
// import "./style.css";
import Travel from "../../Assets/UI_Intership/Travel.svg";
import Contacts from "../../Assets/UI_Intership/Contacts.svg";
import Time from "../../Assets/UI_Intership/Time.svg";
import Dollar from "../../Assets/UI_Intership/Dollar [Fill].svg";
import show from "../../Assets/UI_Intership/Delete.svg";
import send from "../../Assets/UI_Intership/Pin.svg";
import { Link } from "react-router-dom";

export const CardsIntership = ({
  id,
  Titulo,
  Jornada,
  Puesto,
  DescripcionBreve,
  Salario,
}) => {
  return (
    <>
      <div className="bg-gray-50 mx-3 my-4 w-90 rounded-xl shadow-lg ring-1 ring-gray-200">
        <div className="m-3">
          {/*Header*/}
          <div className="grid grid-cols-4 gap-4 my-2">
         
            <div className="flex justify-center items-center col-span-3">
              <p className="font-Poppins text-1.5s font-bold mx-2">{Titulo}</p>
            </div>
          </div>

          <div className="grid grid-cols-8 gap-4 my-4">
            <img src={Contacts} alt="Contacts" className="mx-2" />
            <p className="font-Poppins text-1.5s text-gray-500 col-span-7">
              <strong>Descripcion: </strong>
              {DescripcionBreve}
            </p>

            <img src={Dollar} alt="Dollar" className="mx-3" />
            <p className="font-Poppins text-1.5s text-gray-500 col-span-7">
              <strong>Salario: </strong>
              {Salario}
            </p>

            <img src={Time} alt="Time" className="mx-2" />
            <p className="font-Poppins text-1.5s text-gray-500 col-span-7">
              <strong>Jornada: </strong>
              {Jornada}
            </p>

            <img src={Travel} alt="Travel" className="mx-2" />
            <p className="font-Poppins text-1.5s text-gray-500 col-span-7">
              <strong>Puesto: </strong>
              {Puesto}
            </p>
          </div>

          <div className="flex">
            <button className="flex font-Poppins text-sm bg-second text-white shadow-lg cursor-pointer px-3 py-2 rounded-lg mx-3 justify-center items-center">
              <img src={show} alt="send" className="mx-1" />
              <p>Eliminar</p>
            </button>
            <Link to={`./EditIntership/${id}`}>
              <button className="flex font-Poppins text-sm bg-primary text-white shadow-lg cursor-pointer px-3 py-2 rounded-lg mx-3 justify-center items-center">
                <img src={send} alt="show" className="mx-1" />
                <p>Editar</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
