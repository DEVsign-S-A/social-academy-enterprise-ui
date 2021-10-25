import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "../../Hook/useForm";
import { startMoreinfo } from "../../Redux/Actions/bussinesInfo";
import { PymeInfoEdit } from "../UI_PymeProfile_Edit/PymeInfoEdit";
import { PymeInfo } from "./PymeInfo";

export const AboutPyme = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const { infoBussines } = useSelector((state) => state.bussines);

	let date;

	if (infoBussines === undefined || infoBussines[0] === undefined) {
		date = "";
	} else {
		const { Date } = infoBussines[0];
		date = Date;
	}

	const [formValues, handleInputChange] = useForm({
		info: "",
		Direction: "",
		TypeCompany: "",
		masinfo: "",
		extras: "",
	});
	const { info, Direction, TypeCompany, masinfo, extras } = formValues;

	const handleSubmit = () => {
		dispatch(startMoreinfo(info, Direction, TypeCompany, masinfo, extras));
		setTimeout(() => {
			history.push("/");
		}, 300);
	};

	return (
		<div className="flex flex-row ProfileScreen">
			{date === "" ? <PymeInfo /> : <PymeInfoEdit />}

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
							name="TypeCompany"
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
