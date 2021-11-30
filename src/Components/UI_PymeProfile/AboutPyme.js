import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useForm } from "../../Hook/useForm";
import { startUploadNewPhoto, updateBusinessProfile } from "../../Redux/Actions/bussinesInfo";

export const AboutPyme = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const MyUser = useSelector((state) => state.auth);

	const [formValues, handleInputChange] = useForm({
		...MyUser
	});

	const {nombreEmpresa,
		email,
		fotoPerfil,
		sectorComercial,
		telefono,
		celular,
		descripcion,
		direccion,
		tipoCompannia,
		datosLaborales,
		extras} = formValues;

	const getUpdatedInfo = () =>{
		const updatedInfo = {
			uid: MyUser.uid,
			fechaCreacion: MyUser.fechaCreacion,
			nombreEmpresa,
			email,
			fotoPerfil,
			sectorComercial,
			telefono,
			celular,
			descripcion,
			direccion,
			tipoCompannia,
			datosLaborales,
			extras
		}

		return updatedInfo;
	}

	const handleSubmit = () => {
		const updatedInfo = getUpdatedInfo();
		dispatch(updateBusinessProfile(updatedInfo));
		setTimeout(() => {
			history.push("/");
		}, 300);
	};

	const handleUploadPhoto = (e) =>{
        e.preventDefault();
        document.querySelector('#newPhoto').click();
      }

      const handlePhotoChange = (e) =>{
        const photo = e.target.files[0];
        if(photo){
            dispatch(startUploadNewPhoto(photo, MyUser.uid));
        }
      }

	return (
		<div className="flex flex-row ProfileScreen">
			<div className="flex flex-col justify-center items-center ContenedoresPerfil UserInfo">
				<div className = "relative">
					<img src={fotoPerfil} alt="Foto de Perfil" className="UserImage" />

					<button className="absolute transition-all duration-200 opacity-80 bottom-0 right-0 bg-gray-500 text-white font-Poppins p-2 rounded-lg sm:rounded-xl hover:bg-gray-700 m-2"
                        onClick = {handleUploadPhoto} >
                            <img className = "uploadPhotoSize"
                                src = "https://res.cloudinary.com/socialacademy/image/upload/v1635524233/Social%20Academy%20Image/IconosRecursos/camera_1_rwhul2.png" 
                                alt = "camara" />
                        </button>
                        <input id = "newPhoto"
                            name = "photo"
                            type = "file"
                            className = "hidden"
                            accept = "image/*"
                            onChange = {handlePhotoChange}
                        />
				</div>

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

			<div className="flex flex-col justify-center AboutUser">
				<div className="Bio ContenedoresPerfil">
					<h1 className="TitulosPerfil"> Bio</h1>

					<textarea
						className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-96 resize-none"
						value={descripcion}
						name="descripcion"
						onChange={handleInputChange}
					></textarea>
				</div>

				<div className="ContenedorHabilidades ContenedoresPerfil">
					<h1 className="TitulosPerfil">Dirección</h1>
					<div className="flex flex-row flex-wrap Abilities">
						<textarea
							className="w-full bg-gray-100 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-52 resize-none"
							value={direccion}
							name="direccion"
							onChange={handleInputChange}
						></textarea>
					</div>
				</div>

				<div className="UserLanguages ContenedoresPerfil">
					<h1 className="TitulosPerfil">Tipo de Compañia</h1>
					<div className="flex flex-row flex-wrap Languages">
						<input
							value={tipoCompannia}
							name="tipoCompannia"
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
						value={datosLaborales}
						name="datosLaborales"
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
