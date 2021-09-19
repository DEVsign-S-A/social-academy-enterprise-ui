import React from "react";
import search from "../../Assets/Search.svg";
import Plus from "../../Assets/Plus.svg";
import Filter from "../../Assets/Filter.svg";
import { Link } from "react-router-dom";



export const SearchBar = () => {
  
  
  return (
    <>
      <div className="flex justify-between items-center top-20 left-9 mx-2">
        <div className='flex justify-around bg-gray-100 rounded-lg m-8 py-4 w-full shadow-sm ring-1 ring-gray-300'>
          <img className="mx-5 cursor-pointer" src={search} alt="search icon" />
          <input
            type="text"
            className="appearance-none texto w-11/12 bg-transparent focus:outline-none font-Poppins font-medium text-gray-700"
            placeholder="Buscar.."
          />
          <img className="mr-4 cursor-pointer" src={Filter} alt="search icon" />
        </div>

        <Link to="NewIntership">
          <button className='py-2 px-6 text-white bg-BlueSocial border-blue-500 border-b-4 inline-flex items-center mx-5 my-8 rounded-lg font-Poppins font-medium outline-none'>
              <img src={ Plus } alt="plus icons" className="mr-2" />
              <p className="">Nueva </p>
              &nbsp;
              <p className="">Solicitud</p>
          </button>
        </Link>
      </div>
    </>
  );
};
