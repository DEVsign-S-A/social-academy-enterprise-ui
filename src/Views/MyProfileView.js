import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { AboutPyme } from "../Components/UI_PymeProfileView/AboutPymeView";
import { PymeExperience } from "../Components/UI_PymeProfileView/pymeExperienceView";
import { PymeInfo } from "../Components/UI_PymeProfileView/PymeInfoView";


const MyProfileView = () => {

  const { showSidebar } = useSelector((state) => state.ui);

  return (
    <>
      <div className={`home-section select-none ${!showSidebar && "home-sectionOpen"}`}>
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
          <div className="rounded-lg bg-gray-100 mx-4 pb-8 shadow-md">
          <br/>
            <div className="flex flex-row ProfileScreen">
              <PymeInfo />
              <AboutPyme />
              <PymeExperience />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfileView;
