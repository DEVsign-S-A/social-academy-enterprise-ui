import React from "react";
import { Redirect, useParams } from "react-router";
import { getIntershipById } from "../../Services/getIntershipById";
/* 
    Images
 */
// import back from "../../Assets/UI_Forum/Arrow-Left.svg";
import send from "../../Assets/UI_Intership/Send.svg";
import Mail from "../../Assets/UI_Intership/Mail.svg";
import Smartphone from "../../Assets/UI_Intership/Smartphone.svg";
import pin from "../../Assets/UI_Intership/Pin.svg";
import buil from "../../Assets/UI_Intership/buil.svg";
import { Sidebar } from "../sidebar/Sidebar";
import { Header } from "../Header/Header";
import { useSelector } from "react-redux";
import { InpustEditInterships } from "./InpustEditInterships";

export const FullIntership = () => {
  const { IdIntership } = useParams();

  const intership = getIntershipById(IdIntership);

  if (!intership) {
    <Redirect to="/PageNoFound" />;
  }

  const {
    Company,
    Title,
    Job,
    Careers,
    Workday,
    SalaryRange,
    Body,
    What_we_want_you_todo,
    TechnicalRequirements,
    Education_Experience,
  } = intership;
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
          <div className="rounded-lg bg-gray-100 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-200">
            <br />
            <br />
            <div className="grid grid-cols-4 gap-3 my-2">
              <div className="mx-3 my-2 flex flex-col border-r-2 border-gray-300">
                <img
                  src={Company.ProfilePhoto}
                  alt={Company.CompanyName}
                  className="rounded-full w-96 ring-1 ring-gray-300"
                />

                <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                  <img src={buil} alt="buil" className="mx-2" />
                  <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                    <strong>Nombre del negocio: </strong>
                    {Company.CompanyName}
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                  <img src={pin} alt="buil" className="mx-2" />
                  <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                    <strong>Dirección: </strong>
                    {Company.Direction}
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                  <img src={Smartphone} alt="Smartphone" className="mx-2" />
                  <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                    <strong>telf: </strong>
                    +505-25050-23
                  </p>
                </div>
                <div className="grid grid-cols-8 gap-4 my-4 mx-2">
                  <img src={Mail} alt="Mail" className="mx-2" />
                  <p className="font-Poppins text-gray-600 font-medium text-sm col-span-7">
                    <strong>Correo: </strong>
                    Email@mail.com
                  </p>
                </div>
              </div>
              <div className="col-span-3">
                <InpustEditInterships
                  Title={Title}
                  Job={Job}
                  Careers={Careers}
                  Workday={Workday}
                  SalaryRange={SalaryRange}
                  Body={Body}
                  What_we_want_you_todo={What_we_want_you_todo}
                  TechnicalRequirements={TechnicalRequirements}
                  Education_Experience={Education_Experience}
                />
              </div>
              <button className="flex font-Poppins text-sm bg-BlueSocial text-white font-medium shadow-lg cursor-pointer px-3 py-3 rounded-lg mx-3 justify-center items-center">
                <img src={send} alt="send" className="mx-1" />
                <p>Guardar</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
