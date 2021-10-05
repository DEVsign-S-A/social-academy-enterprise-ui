import React from "react";

export const PymeExperience = ({
  masinfo: extracurricular,
  otra: experiencia,
}) => {
  return (
    <div className="flex flex-col justify-center UserExperience">
      <div className="UserCurricular ContenedoresPerfil">
        <h1 className="TitulosPerfil">Info Extra</h1>
        <textarea
          className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 resize-none"
          value={extracurricular}
          required={true}
        ></textarea>
      </div>

      <div className="UserWork ContenedoresPerfil">
        <h1 className="TitulosPerfil">Datos laborales</h1>
        <textarea
          className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 resize-none"
          value={experiencia}
          required={true}
        ></textarea>
      </div>
    </div>
  );
};
