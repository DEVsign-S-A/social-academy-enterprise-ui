import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { AboutPyme } from "../Components/UI_PymeProfile/AboutPyme";
import { PymeInfo } from "../Components/UI_PymeProfile/PymeInfo";
import { PymeExperience } from "../Components/UI_PymeProfile/pymeExperience";
import { pyme } from "../data/DataPyme";

const MyProfile = () => {
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
          <div className="rounded-lg bg-gray-100 mx-8 pb-8 shadow-md">
          <br/>
            <div className="flex flex-row ProfileScreen">
              <PymeInfo {...pyme} />
              <AboutPyme {...pyme} />
              <PymeExperience {...pyme} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
