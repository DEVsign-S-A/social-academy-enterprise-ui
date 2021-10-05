import React from "react";
// import moment from 'moment';

export const PymeInfo = ({
  CompanyName,
  ProfilePhoto,
  Phone,
  Cellphone,
  SectorComercial,
  email,
}) => {
  const fotoPerfil = ProfilePhoto;
  const correo = email;

  // const annos = moment().diff(fechaNacimiento, 'years', false);

  return (
    <div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
      <img src={fotoPerfil} alt="Foto de Perfil" className="UserImage" />

      <div className="flex flex-col justify-center items-center">
        <div className="UserInformation">
          <div>
            <b>Nombre Comercial:</b>
            <input
              required={true}
              value={CompanyName}
              className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
              type="text"
            />
          </div>
          <br />
          <div>
            <b>Sector Comercial:</b>
            <input
              required={true}
              value={SectorComercial}
              className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
              type="text"
            />
          </div>
          <br />

          {/* <h4><b>Edad:</b> {annos} años </h4> */}
          <div>
            <b>Telefono:</b>
            <input
              required={true}
              value={Phone}
              className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
              type="text"
            />
          </div>
          <br />

          <div>
            <b>Celular:</b>
            <input
              required={true}
              value={Cellphone}
              className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
              type="text"
            />
          </div>
          <br />

          <div>
            <b>Correo:</b>{" "}
            <input
              required={true}
              value={correo}
              className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
              type="text"
            />
          </div>
        </div>

        <div className="UserSocialMedia flex flex-row justify-around"></div>
      </div>
    </div>
  );
};
