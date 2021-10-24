import React from "react";
import { useSelector } from "react-redux";

export const PymeExperience = () => {
	const { infoBussines } = useSelector((state) => state.bussines);

	let ext;
	let dtl;

	if(infoBussines){
		ext = '';
		dtl = '';
	}else{
		const { DatosLaborales, Extras } = infoBussines[1];
		ext = Extras;
		dtl = DatosLaborales;

	}


	return (
		<div className="flex flex-col justify-center UserExperience">
			<div className="UserCurricular ContenedoresPerfil">
				<h1 className="TitulosPerfil">Info Extra</h1>
				<div className="w-full bg-gray-100 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 text-2s">
					{ext}
				</div>
			</div>

			<div className="UserWork ContenedoresPerfil">
				<h1 className="TitulosPerfil">Datos laborales</h1>
				<div className="w-full bg-gray-100  rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 text-2s">
					{dtl}
				</div>
			</div>
		</div>
	);
};
