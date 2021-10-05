import React from "react";
import { useSelector } from "react-redux";
import { SideBatItems } from "./SideBatItems";

import "./style.css";

export const Sidebar = () => {
	const { showSidebar, itemsSidebar } = useSelector((state) => state.ui);

	return (
		<div className={`sidebar ${showSidebar && "open"} `}>
			<br />
			<div className={`flex ${showSidebar && "m-2"} `}>
				{showSidebar ? (
					<img
						src="https://res.cloudinary.com/socialacademy/image/upload/v1633466520/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_1_lj0ltd.png"
						alt="Social Academy Icon"
						className={` ${showSidebar ? "w-full" : "w-48"} `}
					/>
				) : (
					<img
						src="https://res.cloudinary.com/socialacademy/image/upload/v1633466400/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_2_nfg3tn.png"
						alt="Social Academy Icon"
						className={` ${showSidebar ? "w-full" : "w-48"} `}
					/>
				)}
			</div>

			<ul className="nav-links mt-5">
				{itemsSidebar.map((itemSidebar) => (
					<SideBatItems
						key={itemSidebar.id}
						id={itemSidebar.id}
						name={itemSidebar.name}
						hide={itemSidebar.hide}
						image={itemSidebar.image}
						// handleSelected={handleSelected}
					/>
				))}
			</ul>
		</div>
	);
};
