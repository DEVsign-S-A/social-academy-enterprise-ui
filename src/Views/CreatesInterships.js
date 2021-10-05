import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { CardsIntership } from "../Components/Interships/CardsIntership";
import { SearchBar } from "../Components/Interships/searchBar";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { dataIntership } from "../data/dataInternship";

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
          {
            //Main Principal de la Vista
          }
          <div className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-lg ring-1 ring-gray-200">
            <SearchBar />

            <div className="w-11/12 flex flex-row flex-wrap">
              {dataIntership.map((intership) => (
                <CardsIntership key={intership.IdIntership} {...intership} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatesInterships;
