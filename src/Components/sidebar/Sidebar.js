import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../Redux/Actions/uiAction";
import { SideBatItems } from "./SideBatItems";
import right from "../../Assets/Menu.svg";
import exe from "../../Assets/X.svg";
import "./style.css";

export const Sidebar = () => {
	const dispatch = useDispatch();

	const { showSidebar } = useSelector((state) => state.ui);

	const itemsSidebar = [
		{
			id: "1",
			name: "Mi Perfil",
			image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/manager_j3yq64.svg`,
			hide: false,
		},
		{
			id: "2",
			name: "Solicitudes",
			image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/books_kc0mcd.svg`,
			hide: false,
		},
		{
			id: "3",
			name: "Nueva Oferta",
			image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/growth_iy55te.svg`,
			hide: false,
		},
		{
			id: "4",
			name: "DashBoards",
			image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/quality_pvflxp.svg`,
			hide: false,
		},
	];

	const handleClick = () => {
		dispatch(setSidebar(!showSidebar));
	};

	return (
		<div className={`sidebar ${showSidebar && "open"} `}>
			<br />
			<div className={`${showSidebar && "m-2"} flex `}>
				<div>
					{showSidebar ? (
						<img
							src="https://res.cloudinary.com/socialacademy/image/upload/v1633466520/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_1_lj0ltd.png"
							alt="Social Academy Icon"
							className={` ${showSidebar ? "w-10/12" : "w-48"} `}
						/>
					) : (
						<img
							src="https://res.cloudinary.com/socialacademy/image/upload/v1633466400/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_2_nfg3tn.png"
							alt="Social Academy Icon"
							className={` ${showSidebar ? "w-10/12" : "w-48"} `}
						/>
					)}
				</div>

				<button onClick={handleClick} className="cursor-pointer text-gray-700">
					{!showSidebar ? (
						<img
							src={right}
							alt="_"
							onClick={handleClick}
							className="cursor-pointer w-16"
						/>
					) : (
						<img
							src={exe}
							alt="Close"
							onClick={handleClick}
							className="cursor-pointer w-16"
						/>
					)}
				</button>
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
