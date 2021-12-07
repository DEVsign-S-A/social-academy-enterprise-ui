import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";
import "./SidebarStyle.css";

export const SideBatItems = ({ name, image, id, hide }) => {
	const { showSidebar } = useSelector((state) => state.ui);

	const history = useHistory();

	const itemSelected = (id) => {
		// Para Redirigir hacia las diferentes pantallas que se vayan a crear se hara de esta forma
		switch (id) {
			case "1":
				history.push("/");
				break;

			case "2":
				history.push("/IntershipRequest");
				break;

			case "3":
				history.push("/CreatesInterships");
				break;
			case "4":
				history.push("/Dashboard");
				break;
			default:
			// history.push("/");
		}
	};

	return (
		<>
			<li
				className={`items_sidebar ${hide && "bg-gray-100 shadow-lg"}`}
				onClick={() => itemSelected(id)}
			>
				<div className="flex items-center">
					<img
						src={image}
						alt="icon"
						className={` ${showSidebar && "w-1/5"} `}
					/>
					{showSidebar && (
						<span className="lg:mx-3 font-medium text-gray-500 lg:text-xl text-sm mx-2">
							{name}
						</span>
					)}
				</div>
				<span className="tooltip">{name}</span>
			</li>
		</>
	);
};
