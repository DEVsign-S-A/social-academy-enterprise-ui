
import React from "react";

export const SocialIconsRegister = () => {

    //TODO: Crear el Dispatch

  return (
     <div className="flex justify-center items-center my-2">
      <button className='h-8 w-8 p-5 flex justify-center items-center border-2 border-gray-500 text-gray-500 rounded-full m-1 hover:border-second hover:text-second transition-colors duration-300 ease-linear'>
        <i className="fab fa-google"></i>
      </button>
      <button className="h-8 w-8 p-5 flex justify-center items-center border-2 border-gray-500 text-gray-500 rounded-full m-1 hover:border-primary hover:text-primary transition-colors duration-300 ease-linear">
        <i className="fab fa-facebook-f"></i>
      </button>
      <button className='h-8 w-8 p-5 flex justify-center items-center border-2 border-gray-500 text-gray-500 rounded-full m-1 hover:border-second hover:text-second transition-colors duration-300 ease-linear'>
        <i className="fab fa-twitter"></i>
      </button>
      <button className="h-8 w-8 p-5 flex justify-center items-center border-2 border-gray-500 text-gray-500 rounded-full m-1 hover:border-primary hover:text-primary transition-colors duration-300 ease-linear">
        <i className="fab fa-microsoft"></i>
      </button>
      <button className='h-8 w-8 p-5 flex justify-center items-center border-2 border-gray-500 text-gray-500 rounded-full m-1 hover:border-second hover:text-second transition-colors duration-300 ease-linear'>
        <i className="fab fa-github"></i>
      </button>
    </div>
  );
};




