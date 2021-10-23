import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { AboutPyme } from "../Components/UI_PymeProfile/AboutPyme";
import { AboutPymeEdit } from "../Components/UI_PymeProfile_Edit/AboutPymeEdit";

const MyProfile = () => {
	const { showSidebar } = useSelector((state) => state.ui);
	const { infoBussines } = useSelector((state) => state.bussines);

	const { Direccion, Descripcion } = infoBussines[1];

	return (
		<>
			<div
				className={`home-section select-none ${
					!showSidebar && "home-sectionOpen"
				}`}
			>
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
						<br />
						<div className="">
							{Direccion || Descripcion ? <AboutPymeEdit /> : <AboutPyme />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
