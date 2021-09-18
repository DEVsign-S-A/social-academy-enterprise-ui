import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Li } from "../Li";
import { Span } from "../Span";
import "./style.css";

export const SideBatItems = ({ name, image, handleSelected, id, hide }) => {
  const { showSidebar } = useSelector((state) => state.ui);

  const history = useHistory();

  const itemSelected = (id) => {


    handleSelected(id);

    // Para Redirigir hacia las diferentes pantallas que se vayan a crear se hara de esta forma
    switch (id) {
      case "1":
        history.push("/teachers_admin");
        break;
        
      case "2":
        history.push("/teachers_rates");
        break;

      case "3":
        history.push("/teachers_lessons");
        break;

      default:
        history.push("/");
    }

  };

  return (
    <>
      <Li
        $items_sidebar
        className={`${hide && "bg-white shadow-lg"}`}
        onClick={() => itemSelected(id)}
      >
        <div className="flex items-center">
          <img src={image} alt="icon" />
          {showSidebar && <Span $span_sidebar>{name}</Span>}
        </div>
        <span className="tooltip">{name}</span>
      </Li>
    </>
  );
};
