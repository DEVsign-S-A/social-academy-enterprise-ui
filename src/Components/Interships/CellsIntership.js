import React from "react";
import { CellsItemsIntership } from "./CellsItemsIntership";
import { GridItemsHeader } from "./GridItemsHeader";

export const CellsIntership = ({
  IdIntership,
  Title,
  Internshipapplicants,
}) => {
  return (
    <div className="bg-gray-50 m-3 p-3 w-11/12 ring-1 ring-gray-200 shadow-sm rounded-md">
      <div className="flex justify-between my-2">
        <div className="flex mx-3 font-Poppins text-gray-600 text-1.5s">
          <strong>Id de la publicación: &nbsp; &nbsp;</strong>
          <p>{IdIntership}</p>
        </div>
        <div className="flex mx-3 font-Poppins text-gray-600 text-1.5s">
          <strong>Titulo: &nbsp; &nbsp;</strong>
          <p>{Title}</p>
        </div>
      </div>
      <GridItemsHeader />
      <div className="flex flex-col justify-center items-center">
        {Internshipapplicants.map((intership) => (
          <CellsItemsIntership key={intership.iduser} {...intership} />
        ))}
      </div>
    </div>
  );
};