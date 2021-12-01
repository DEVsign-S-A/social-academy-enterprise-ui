import React from "react";
import { CellsItemsIntership } from "./CellsItemsIntership";
import { GridItemsHeader } from "./GridItemsHeader";
import datas from "../../Assets/UI_Validate/02.svg";

export const CellsIntership = ({
  id,
  Titulo,
  solictudesRespustas,
}) => {

  console.log(solictudesRespustas)
  return (
    <div className="bg-gray-50 m-3 p-3 w-11/12 ring-1 ring-gray-200 shadow-sm rounded-md">
      <div className="flex justify-between my-2">
        <div className="flex mx-3 font-Poppins text-gray-600 text-1.5s">
          <strong>Id de la publicación: &nbsp; &nbsp;</strong>
          <p>{id}</p>
        </div>
        <div className="flex mx-3 font-Poppins text-gray-600 text-1.5s">
          <strong>Titulo: &nbsp; &nbsp;</strong>
          <p>{Titulo}</p>
        </div>
      </div>
      <GridItemsHeader />
      <div className="flex flex-col justify-center items-center">
        {
          (solictudesRespustas.length !== 0)?(
            <>
              {solictudesRespustas.map((intership) => (
                <CellsItemsIntership key={intership.id} {...intership} id={id} />
              ))}
            </>
          ):(
            <>
                <h1 className="mx-3 font-Poppins text-gray-600 text-2xl font-semibold">
                  Esta publicación aun no tiene solicitudes de pasantes
                </h1>
                <img src={datas} alt="datas" className="w-64" />
            </>
          )
        }
      </div>
    </div>
  );
};
