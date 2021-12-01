import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { CellsIntership } from "../Components/Interships/CellsIntership";
import { SearchBarRequest } from "../Components/Interships/searchBar copy";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { startLoadingInterships } from "../Redux/Actions/intershipsActions";
const IntershipRequest = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  const { interships } = useSelector((state) => state.interships);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingInterships());
  }, [dispatch]);

  console.log(interships);

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
            <SearchBarRequest />
            <div className="flex flex-col justify-center items-center">
              {interships.map((intership) => (
                <CellsIntership key={intership.id} {...intership} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntershipRequest;
