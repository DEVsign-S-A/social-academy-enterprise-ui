import React, { useState } from "react";
import More from "../../Assets/UI_Intership/More.svg";
import datas from "../../Assets/UI_Validate/02.svg";
import { GirdModalItemsUser } from "./GirdModalItemsUser";
export const CellsItemsIntership = ({
  fotoPerfil,
  nombreUsuario,
  correo,
  telefono,
  uid,
  id
}) => {
  const [ItemModal, setItemModal] = useState(false);

  return (
    <>
      {nombreUsuario ? (
        <>
          <GirdModalItemsUser
            ItemModal={ItemModal}
            setItemModal={setItemModal}
            uid={uid}
            id={id}
          />
          <div className="grid grid-cols-0 gap-0 py-4 w-full text-sm ring-1 ring-gray-200 tablet:grid-cols-4 tablet:gap-4">
            <div className="flex justify-around">
              <img
                className="rounded-md w-8 laptop:w-12"
                src={fotoPerfil}
                alt="icon Person"
              />
            </div>

            <p className="text-gray-600 text-1s font-medium mt-4 laptop:text-2s">
              {nombreUsuario}
            </p>

            <p className="text-gray-600 text-1s font-medium mt-4 laptop:text-2s">
              {correo}
            </p>

            <div className="flex justify-around">
              <p className="text-gray-600 text-1s font-medium mt-4 laptop:text-2s">
                {telefono}
              </p>

              <div
                className="cursor-pointer"
                onClick={() => setItemModal(!ItemModal)}
              >
                <img className="mt-4" src={More} alt="icon Person" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="mx-3 font-Poppins text-gray-600 text-2xl font-semibold">
            Esta publicación aun no tiene solicitudes de pasantes
          </h1>
          <img src={datas} alt="datas" className="w-64" />
        </>
      )}
    </>
  );
};
