import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBatItems } from "./SideBatItems";

import logo from "../../Assets/sociallog.svg";
import right from "../../Assets/Menu.svg";
import X from "../../Assets/X.svg";
import "./style.css";
import { setSidebar } from "../../Redux/Actions/uiAction";

export const Sidebar = () => {
  const { showSidebar, itemsSidebar } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setSidebar(!showSidebar));
  };

 
  return (
    <div className={`sidebar ${showSidebar && "open"} `}>
      <br />
      <div className={`flex ${showSidebar && "m-2"} `}>
	  <img src={logo} alt="Social Academy Icon" 
		  className={` ${showSidebar ? "w-full" : "w-48"} `}
	  />
        {!showSidebar && (
          <img
            src={right}
            alt="_"
            onClick={handleClose}
            className="ml-3 cursor-pointer"
          />
        )}

        {showSidebar && (
          <div className="flex">
            <img
              src={X}
              alt="Close"
              onClick={handleClose}
              className={`${
                showSidebar && "px-4 py-0 ml-5 rounded-md cursor-pointer"
              } `}
            />
          </div>
        )}
      </div>

      <ul className="nav-links mt-5">
         {itemsSidebar.map((itemSidebar) => (
          <SideBatItems
            key={itemSidebar.id}
            id={itemSidebar.id}
            name={itemSidebar.name}
            hide={itemSidebar.hide}
            image={itemSidebar.image}
            // handleSelected={handleSelected}
          />
        ))}
      </ul>
    </div>
  );
};
