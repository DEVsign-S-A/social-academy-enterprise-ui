import React from "react";
import { useSelector } from "react-redux";
import { SideBatItems } from "./SideBatItems";

import logo from "../../Assets/sociallog.svg";
import "./style.css";

export const Sidebar = () => {
  const { showSidebar, itemsSidebar } = useSelector((state) => state.ui);
 
  return (
    <div className={`sidebar ${showSidebar && "open"} `}>
      <br />
      <div className={`flex ${showSidebar && "m-2"} `}>
	  <img src={logo} alt="Social Academy Icon" 
		  className={` ${showSidebar ? "w-full" : "w-48"} `}
	  />
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
