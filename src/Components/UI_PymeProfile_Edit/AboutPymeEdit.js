import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../Hook/useForm";
import { startEditMoreInfo } from "../../Redux/Actions/bussinesInfo";
import { PymeInfo } from "../UI_PymeProfile/PymeInfo";
import { PymeInfoEdit } from "./PymeInfoEdit";

export const AboutPymeEdit = () => {
	
	const dispatch = useDispatch();


	const { infoBussines } = useSelector((state) => state.bussines);
	
	const { Date } = infoBussines[0];
	
	const { Direccion, TipoCompannia, DatosLaborales, Descripcion, Extras} = infoBussines[1];
	
	const [formValues, handleInputChange] = useForm({
		info: Descripcion,
		Direction: Direccion,
		TypeCompany: TipoCompannia,
		masinfo: DatosLaborales,
		extras: Extras,
	});
	const { info, Direction, TypeCompany, masinfo, extras } = formValues;
	

	
	const handleSubmit = () => {
		dispatch(startEditMoreInfo(info, Direction, TypeCompany, masinfo, extras));
	};

	return (
		<div className="flex flex-row ProfileScreen">
		{Date ? <PymeInfoEdit /> : <PymeInfo /> }

			<div className="flex flex-col justify-center AboutUser">
				<div className="Bio ContenedoresPerfil">
					<h1 className="TitulosPerfil"> Bio</h1>

					<textarea
						className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-96 resize-none"
						value={info}
						name="info"
						onChange={handleInputChange}
						required={true}
					></textarea>
				</div>

				<div className="ContenedorHabilidades ContenedoresPerfil">
					<h1 className="TitulosPerfil">Direction</h1>
					<div className="flex flex-row flex-wrap Abilities">
						<textarea
							className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-52 resize-none"
							value={Direction}
							name="Direction"
							required={true}
							onChange={handleInputChange}
						></textarea>
					</div>
				</div>

				<div className="UserLanguages ContenedoresPerfil">
					<h1 className="TitulosPerfil">Tipo de Compañia</h1>
					<div className="flex flex-row flex-wrap Languages">
						<input
							required={true}
							value={TypeCompany}
							nae="TypeCompany"
							onChange={handleInputChange}
							className="mx-8 w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
							type="text"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-col justify-center UserExperience">
				<div className="UserCurricular ContenedoresPerfil">
					<h1 className="TitulosPerfil">Info Extra</h1>
					<textarea
						className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 resize-none"
						value={extras}
						name="extras"
						onChange={handleInputChange}
					></textarea>
				</div>

				<div className="UserWork ContenedoresPerfil">
					<h1 className="TitulosPerfil">Datos laborales</h1>
					<textarea
						className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-72 resize-none"
						value={masinfo}
						name="masinfo"
						onChange={handleInputChange}
					></textarea>
				</div>
				<input
						type="submit"
						className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-md m-5 cursor-pointer font-Poppins font-medium text-white"
						value="Guardar"
						onClick={handleSubmit}
					/>
			</div>
		</div>
	);
};
