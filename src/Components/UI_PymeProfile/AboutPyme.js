import React from "react";

export const AboutPyme = ({ info, Direction, TypeCompany }) => {
  return (
    <div className="flex flex-col justify-center AboutUser">
      <form>
        <div className="Bio ContenedoresPerfil">
          <h1 className="TitulosPerfil"> Bio</h1>

          <textarea
            className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-96 resize-none"
            value={info}
            required={true}
          ></textarea>
        </div>

        <div className="ContenedorHabilidades ContenedoresPerfil">
          <h1 className="TitulosPerfil">Direction</h1>
          <div className="flex flex-row flex-wrap Abilities">
          <textarea
            className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-52 resize-none"
            value={Direction}
            required={true}
          ></textarea>
          </div>
        </div>

        <div className="UserLanguages ContenedoresPerfil">
          <h1 className="TitulosPerfil">Tipo de Compañia</h1>
          <div className="flex flex-row flex-wrap Languages">
            <input
              required={true}
              value={TypeCompany}
              className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
              type="text"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
