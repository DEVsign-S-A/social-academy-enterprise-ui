import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { CellsIntership } from "../Components/Interships/CellsIntership";
import { SearchBarRequest } from "../Components/Interships/searchBar copy";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { dataIntership} from '../data/dataInternship'
const IntershipRequest = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  // const dispatch = useDispatch();

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
          <div className="rounded-lg bg-gray-100 mt-10 mx-8 pb-8 shadow-lg ring-1 ring-gray-200">
            <SearchBarRequest/>
             <div className="flex flex-col justify-center items-center">
              {dataIntership.map((intership) => (
                <CellsIntership key={intership.IdIntership} {...intership} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntershipRequest;
