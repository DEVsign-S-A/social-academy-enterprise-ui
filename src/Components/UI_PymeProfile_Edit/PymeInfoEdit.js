import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../Hook/useForm";
import { startEditInfo } from "../../Redux/Actions/bussinesInfo";

export const PymeInfoEdit = () => {
	const { displayName, UserData } = useSelector((state) => state.auth);
	const { providerId, profile } = UserData;
	let photo;
	let correoElectronico;
	
	if(providerId === 'password'){
		photo = 'https://thispersondoesnotexist.com/image';
		correoElectronico='';
	}else{
		const { picture , email } = profile;
		photo = picture;
		correoElectronico = email;
	}


	const { infoBussines } = useSelector((state) => state.bussines);

	const { Celular, Telefono, SectorComercial: SE,} = infoBussines[0];

	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		CompanyName: displayName,
		SectorComercial: SE,
		Phone: Telefono,
		Cellphone: Celular,
		correo: correoElectronico,
	});
	const { CompanyName, SectorComercial, Phone, Cellphone, correo } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(startEditInfo(CompanyName, SectorComercial, Phone, Cellphone, correo));
		// console.log(CompanyName, SectorComercial, Phone, Cellphone, correo);
	};

	return (
		<div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
	
			<img src={photo} alt="Foto de Perfil" className="UserImage" />

			<div className="flex flex-col justify-center items-center">
				<div className="UserInformation">
					<form onSubmit={handleSubmit}>
						<div>
							<b>Nombre Comercial: </b>
							<input
								required
								name="CompanyName"
								onChange={handleInputChange}
								value={CompanyName}
								className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
								type="text"
							/>
						</div>
						<br />
						<div>
							<b>Sector Comercial:</b>
							<input
								required
								value={SectorComercial}
								name="SectorComercial"
								onChange={handleInputChange}
								className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
								type="text"
							/>
						</div>
						<br />

						{/* <h4><b>Edad:</b> {annos} años </h4> */}
						<div>
							<b>Telefono:</b>
							<input
								required
								value={Phone}
								name="Phone"
								onChange={handleInputChange}
								className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
								type="text"
							/>
						</div>
						<br />

						<div>
							<b>Celular:</b>
							<input
								required={true}
								value={Cellphone}
								name="Cellphone"
								onChange={handleInputChange}
								className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
								type="text"
							/>
						</div>
						<br />

						<div>
							<b>Correo:</b>
							<input
								required
								value={correo}
								name="correo"
								onChange={handleInputChange}
								className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-2 font-Poppins text-gray-700 text-1s"
								type="text"
							/>
						</div>

						<input
							type="submit"
							className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-md m-5 cursor-pointer font-Poppins font-medium text-white"
							value="Guardar"
							onClick={handleSubmit}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
