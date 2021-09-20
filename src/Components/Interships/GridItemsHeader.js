import React from "react";

export const GridItemsHeader = () => {
  return (
    <>
      <div className="select-none hidden tabletbig:block">
        <div className="grid grid-cols-0 gap-0 py-4 w-auto text-sm border-b-2 border-gray-200 tablet:grid-cols-4 tablet:gap-4">
          <div className="flex cursor-pointer"></div>

          <p className="text-gray-400 text-1s font-bold uppercase laptop:text-2s">
            Nombre
          </p>

          <p className="text-gray-400 text-1s font-bold uppercase laptop:text-2s">
            email
          </p>

          <p className="text-gray-400 text-1s font-bold uppercase laptop:text-2s">
            telf
          </p>
        </div>
      </div>
    </>
  );
};
