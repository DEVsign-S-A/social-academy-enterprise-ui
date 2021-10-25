import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { AboutPyme } from "../Components/UI_PymeProfile/AboutPyme";
import { AboutPymeEdit } from "../Components/UI_PymeProfile_Edit/AboutPymeEdit";

const MyProfile = () => {
	const { showSidebar } = useSelector((state) => state.ui);
	const { infoBussines } = useSelector((state) => state.bussines);
	let dir;
	let desc;

	if(infoBussines === undefined || infoBussines[1] === undefined){
		dir = '';
		desc = '';
	}else{
		const { Direccion, Descripcion } = infoBussines[1];
		dir = Direccion;
		desc = Descripcion;

	}

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
							{dir === '' || desc === '' ? <AboutPyme /> : <AboutPymeEdit/>}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfile;
