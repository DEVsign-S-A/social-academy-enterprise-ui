import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../Components/Header/Header";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { AboutPymeEdit } from "../Components/UI_PymeProfile_Edit/AboutPymeEdit";

const MyProfileEdit = () => {
	const { showSidebar } = useSelector((state) => state.ui);

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
							<AboutPymeEdit />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProfileEdit;
