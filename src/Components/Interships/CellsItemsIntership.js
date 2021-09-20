import React from "react";
import More from "../../Assets/UI_Intership/More.svg"
export const CellsItemsIntership = ({ photo, name, email, telf }) => {
  return (
    <>
      <div className="grid grid-cols-0 gap-0 py-4 w-full text-sm ring-1 ring-gray-200 tablet:grid-cols-4 tablet:gap-4">
        <div className="flex justify-around">
          {/* <input
            type="checkbox"
            className="cursor-pointer mt-4 rounded-md text-gray-300 w-5 h-5"
          /> */}
          <img className="w-8 laptop:w-12" src={photo} alt="icon Person" />
        </div>

        <div className="flex-1">
          <p className="text-gray-600 text-1s font-medium laptop:text-2s">
            {name}
          </p>
          {/* <p className='text-gray-600 text-1s font-medium mt-4 laptop:text-2s'_sm>{Roles[0]}</p>  */}
        </div>

        <p className="text-gray-600 text-1s font-medium mt-4 laptop:text-2s">
          {email}
        </p>

        <div className="flex justify-around">
          <p className="text-gray-600 text-1s font-medium mt-4 laptop:text-2s">
            {telf}
          </p>

          <div
            className="cursor-pointer"
            // onClick={() => setItemModal(!ItemModal)}
          >
            <img className="mt-4" src={More} alt="icon Person" /> 
        </div>
        </div>
      </div>
    </>
  );
};
