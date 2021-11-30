import React from "react";
import { useSelector } from "react-redux";

export const PymeInfo = () => {
  const MyUser = useSelector((state) => state.auth);
 

  return (
    <div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
      <img src={MyUser.fotoPerfil} alt="Foto de Perfil" className="UserImage" />

      <div className="flex flex-col justify-center items-center">
        <div className="UserInformation">
          <form>
            <div>
              <b>Nombre Comercial: </b>
              <p>{MyUser.nombreEmpresa}</p>
            </div>
            <br />
            <div>
              <b>Sector Comercial:</b>
              <p>{MyUser.sectorComercial}</p>
            </div>
            <br />
            <div>
              <b>Telefono:</b>
              <p>{MyUser.telefono}</p>
            </div>
            <br />

            <div>
              <b>Celular:</b>
              <p>{MyUser.celular}</p>
            </div>
            <br />

            <div>
              <b>Correo:</b>
              <p className="text-1.5s">{MyUser.email}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
