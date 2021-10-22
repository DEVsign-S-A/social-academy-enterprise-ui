import React from "react";
import circulo402 from "../img/circulo402.png";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <div className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <div className="fixed w-full h-auto flex justify-center items-center z-10">
        <img src={circulo402} alt="circulo402" />
      </div>

      <div className="w-full h-screen flex flex-col items-center justify-center z-20">
        <div>
          <p className="font-Poppins text-10xl text-YellowOfficial">404</p>
        </div>
        <div>
          <p className="font-Poppins text-5xl text-center text-gray-600 mb-10">
          Parece que no podemos encontrar esta página
          </p>
        </div>
        <div>
          <p className="font-Poppins text-1xl pb-8">
          La página que estás buscando no existe o se ha movido.
          </p>
        </div>
        <Link to="/Login">
          <button className="font-Poppins py-3 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center rounded">
            Regresar al Login
          </button>
        </Link>
      </div>
    </div>
  );
};
