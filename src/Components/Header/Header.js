import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../Redux/Actions/uiAction";

export const Header = () => {

 const { showSidebar } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch(setSidebar(!showSidebar));
  };

  return (
    <>
      <header className="bg-gray2 pt-10">
        <nav>
          <button onClick={handleClick}
            className="mx-5 text-2xl cursor-pointer text-gray-700 bg">
          </button>
        </nav>
      </header>
    </>
  );
};
