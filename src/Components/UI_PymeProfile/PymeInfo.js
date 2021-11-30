import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "../../Hook/useForm";

export const PymeInfo = () => {

	const history = useHistory();

	const MyUser = useSelector((state) => state.auth);


	//const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		...MyUser
	});

	const {nombreEmpresa,
	email,
	fotoPerfil,
	sectorComercial,
	telefono,
	celular} = formValues;


	return (
		<>
			<div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
	
				<img src={fotoPerfil} alt="Foto de Perfil" className="UserImage" />

				<div className="flex flex-col justify-center items-center">
					
					<div className="UserInformation">
						
							<div>
								<b>Nombre Comercial: </b>
								<input
									required
									name="nombreEmpresa"
									onChange={handleInputChange}
									value={nombreEmpresa}
									className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
									type="text"
								/>
							</div>
							<br />
							<div>
								<b>Sector Comercial:</b>
								<input
									required
									value={sectorComercial}
									name="sectorComercial"
									onChange={handleInputChange}
									className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
									type="text"
								/>
							</div>
							<br />

							<div>
								<b>Telefono:</b>
								<input
									value={telefono}
									name="telefono"
									onChange={handleInputChange}
									className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s"
									type="text"
								/>
							</div>
							<br />

							<div>
								<b>Celular:</b>
								<input
									value={celular}
									name="celular"
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
									value={email}
									name="email"
									onChange={handleInputChange}
									className="w-11/12 bg-gray-100 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-2 font-Poppins text-gray-700 text-1s"
									type="text"
								/>
							</div>
							
					</div>
				</div>

			</div>
		</>
	);
};
