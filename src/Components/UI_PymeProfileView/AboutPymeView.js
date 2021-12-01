import React from "react";
import { useSelector } from "react-redux";

export const AboutPyme = () => {
	const MyUser = useSelector((state) => state.auth);

	return (
		<div className="flex flex-col justify-center AboutUser">
			<form>
				<div className="Bio ContenedoresPerfil">
					<h1 className="TitulosPerfil"> Bio</h1>

					<div className="w-full bg-gray-100 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-96 resize-none">
						{MyUser.descripcion}
					</div>
				</div>

				<div className="ContenedorHabilidades ContenedoresPerfil">
					<h1 className="TitulosPerfil">Dirección</h1>
					<div className="flex flex-row flex-wrap Abilities">
						<div className="w-full bg-gray-100 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-52 resize-none">
							{MyUser.direccion}
						</div>
					</div>
				</div>

				<div className="UserLanguages ContenedoresPerfil">
					<h1 className="TitulosPerfil">Tipo de Compañia</h1>
					<div className="flex flex-row flex-wrap Languages">
						<div className="mx-8 w-11/12 bg-gray-100  rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700">
							{MyUser.tipoCompannia}
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
