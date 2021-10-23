import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loadInfo } from "../../Redux/Actions/bussinesInfo";

export const PymeInfo = () => {

	const dispatch = useDispatch();


	const { uid, displayName, UserData } = useSelector((state) => state.auth);
	const { providerId, profile } = UserData;
	let photo;
	let correoElectronico;

	const { infoBussines } = useSelector((state) => state.bussines);

	const { Celular, Telefono, SectorComercial,} = infoBussines[0];


	if (providerId === "password") {
		photo = "https://thispersondoesnotexist.com/image";
		correoElectronico = "";
	} else {
		const { picture, email } = profile;
		photo = picture;
		correoElectronico = email;
	}

	useEffect(() => {
		dispatch(loadInfo(uid));
	}, [dispatch, uid]);



	return (
		<div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
			<img src={photo} alt="Foto de Perfil" className="UserImage" />

			<div className="flex flex-col justify-center items-center">
				<div className="UserInformation mx-2">
					<form>
						<div>
							<b>Nombre Comercial: </b>
							<div className="w-11/12 bg-gray-100 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-1.5s uppercase">
								<p>{displayName}</p>
							</div>
						</div>
						<br />
						<div>
							<b>Sector Comercial:</b>
							<div className="w-11/12 bg-gray-100 r rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-2s">
								<p>{SectorComercial}</p>
							</div>
						</div>
						<br />

						{/* <h4><b>Edad:</b> {annos} años </h4> */}
						<div>
							<b>Telefono:</b>
							<div className="w-11/12 bg-gray-100  rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-2s">
								<p>{Telefono}</p>
							</div>
						</div>
						<br />

						<div>
							<b>Celular:</b>
							<div className="w-11/12 bg-gray-100 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700 text-2s">
								<p>{Celular}</p>
							</div>
						</div>
						<br />

						<div>
							<b>Correo:</b>
							<div className="w-11/12 bg-gray-100 py-2 outline-none px-2 font-Poppins text-gray-700 text-2s">
								<p>{correoElectronico}</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};