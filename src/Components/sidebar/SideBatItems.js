import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setItemSelected } from "../../Redux/Actions/uiAction";
import "./style.css";
import "./SidebarStyle.css";

export const SideBatItems = ({ name, image, handleSelected, id, hide }) => {
  const { showSidebar } = useSelector((state) => state.ui);

  const history = useHistory();

  const dispatch = useDispatch();

  
  
  const itemSelected = (id) => {
    
    dispatch(setItemSelected(id));

    // Para Redirigir hacia las diferentes pantallas que se vayan a crear se hara de esta forma
    switch (id) {
      case "1":
       history.push("/IntershipRequest");
        break;
        
      case "2":
         history.push("/MyProfile");
        break;

      case "3":
         history.push("/CreatesInterships");
        break;

      default:
        // history.push("/");
    }

  };

  return (
    <>
      <li
        className={`items_sidebar ${ hide && "bg-gray-100 shadow-lg"}`}
        onClick={() => itemSelected(id)}
      >
        <div className="flex items-center">
          <img src={image} alt="icon" 
            className={` ${showSidebar && "w-1/5"} `}
          />
          {showSidebar && <span className='lg:mx-3 font-medium text-gray-500 lg:text-xl text-sm mx-2'>{name}</span>}
        </div>
        <span className="tooltip">{name}</span>
      </li>
    </>
  );
};
