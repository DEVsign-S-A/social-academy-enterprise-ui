import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadInfo } from "../../Redux/Actions/bussinesInfo";

export const PymeInfo = () => {
  const dispatch = useDispatch();

  const { uid, displayName, UserData } = useSelector((state) => state.auth);
  const { providerId, profile } = UserData;
  let photo;
  let correoElectronico;
  let cell = "";
  let name = "";
  let phone = "";
  let sectCor = "";

  const { infoBussines } = useSelector((state) => state.bussines);

  if (infoBussines === undefined || infoBussines[0] === undefined) {
    cell = "";
    phone = "";
    sectCor = "";
    name = displayName;
    correoElectronico = "";
  } else {
    const { Celular, Telefono, SectorComercial, Correo, NombreComercial } =
      infoBussines[0];
    cell = Celular;
    phone = Telefono;
    sectCor = SectorComercial;
    correoElectronico = Correo;
    name = NombreComercial;
  }

  if (providerId === "password") {
    photo = "https://thispersondoesnotexist.com/image";
  } else {
    const { picture, email } = profile;
    photo = picture;
    correoElectronico = email;
  }

  useEffect(() => {
    dispatch(loadInfo(uid));
  }, [dispatch, uid]);

  return (
    <div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
      <img src={photo} alt="Foto de Perfil" className="UserImage" />

      <div className="flex flex-col justify-center items-center">
        <div className="UserInformation">
          <form>
            <div>
              <b>Nombre Comercial: </b>
              <p>{name}</p>
            </div>
            <br />
            <div>
              <b>Sector Comercial:</b>
              <p>{sectCor}</p>
            </div>
            <br />
            <div>
              <b>Telefono:</b>
              <p>{phone}</p>
            </div>
            <br />

            <div>
              <b>Celular:</b>
              <p>{cell}</p>
            </div>
            <br />

            <div>
              <b>Correo:</b>
              <p className="text-1.5s">{correoElectronico}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
