import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";

const CreatesInterships = () => {
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
          <div className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-md"></div>
        </div>
      </div>
    </>
  );
};

export default CreatesInterships;
