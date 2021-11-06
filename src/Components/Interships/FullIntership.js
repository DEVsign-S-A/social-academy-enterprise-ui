import React from "react";
import { useParams } from "react-router";
/* 
    Images
 */
// import back from "../../Assets/UI_Forum/Arrow-Left.svg";
import { Sidebar } from "../sidebar/Sidebar";
import { Header } from "../Header/Header";
import { useSelector } from "react-redux";
import { InpustEditInterships } from "./InpustEditInterships";

export const FullIntership = () => {
  const { IdIntership } = useParams();

  const { interships } = useSelector((state) => state.interships);

  const loadInter = interships.find((inter) => inter.id === IdIntership);

  const {
    Carreras,
    DescripcionBreve,
    DescripcionLarga,
    Educacion,
    Habilidades,
    Jornada,
    Puesto,
    Salario,
    Titulo,
  } = loadInter;

  const { showSidebar } = useSelector((state) => state.ui);

  return (
    <>
      <div className={`home-section ${!showSidebar && "home-sectionOpen"}`}>
        {
          // Barra lateral
          <Sidebar />
        }
        <div className="pb-8">
          <div className="flex justify-between">
            {
              // nav
              <Header />
            }
          </div>
          {
            //Main Principal de la Vista
          }
          <div className="rounded-lg bg-gray-100 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-300">
            <br />
            <br />
            <div className="w-11/12 mx-8 my-2">
              <div>
                <InpustEditInterships
                  Title={Titulo}
                  Job={Puesto}
                  Careers={Carreras}
                  Workday={Jornada}
                  SalaryRange={Salario}
                  Body={DescripcionBreve}
                  What_we_want_you_todo={DescripcionLarga}
                  TechnicalRequirements={Habilidades}
                  Education_Experience={Educacion}
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
