import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../Redux/Actions/uiAction";
import right from "../../Assets/Menu.svg";
import X from "../../Assets/X.svg";
import {pyme} from '../../data/DataPyme'
export const Header = () => {
  const { showSidebar } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setSidebar(!showSidebar));
  };
  const {CompanyName, ProfilePhoto} = pyme;

  return (
    <>
      <header className="pt-3 w-full flex justify-between">
        <nav className="pt-8">
          <button
            onClick={handleClick}
            className="mx-3 cursor-pointer text-gray-700"
          >
            {!showSidebar ? (
              <img
                src={right}
                alt="_"
                onClick={handleClick}
                className="cursor-pointer -mt-7"
              />
            ) : (
              <img
                src={X}
                alt="Close"
                onClick={handleClick}
                className={"mt-3 cursor-pointer"}
              />
            )}
          </button>

        </nav>
          <div className='flex mx-5 pt-5 relative right-0 justify-center items-center'>
              <p
                className='font-Poppins font-bold text-gray-600'
              >{CompanyName}</p>
              <img
                src={ProfilePhoto}
                alt={CompanyName}
                className='mx-5 w-16 rounded-full ring-1 ring-gray-200 drop-shadow-lg shadow-md'
              />
          </div>
      </header>
    </>
  );
};
