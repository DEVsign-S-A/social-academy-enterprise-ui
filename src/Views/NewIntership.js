import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { Header } from "../Components/Header/Header";
//image
import back from "../Assets/UI_Forum/Arrow-Left.svg";
import { useForm } from "../Hook/useForm";

const NewIntership = () => {
	const history = useHistory();
	const { showSidebar } = useSelector((state) => state.ui);

	const handleBack = () => {
		history.push("/CreatesInterships");
	};

	const [formValues, handleInputChange] = useForm({
		titulo: "",
		descBreve: "",
		descLarga: "",
		skills: "",
		educacion: "",
		carreras: "",
		puesto: "",
		jornada: "",
		salario: "",
	});

	const {
		titulo,
		descBreve,
		descLarga,
		skills,
		educacion,
		carreras,
		puesto,
		jornada,
		salario,
	} = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(
			titulo,
			descBreve,
			descLarga,
			skills,
			educacion,
			carreras,
			puesto,
			jornada,
			salario
		);
	};

	return (
		<>
			<div className={`home-section ${!showSidebar && "home-sectionOpen"}`}>
				{
					// Barra lateral
					<Sidebar />
				}
				<div className="pb-8">
					<div className="flex justify-between">
						{
							// nav
							<Header />
						}
					</div>
					{
						//Main Principal de la Vista
					}
					<div className="flex justify-between">
						<h1 className="text-gray-700 font-Poppins font-semibold text-2xl ml-3">
							Crea una Nueva Oferta de Pasantía
						</h1>

						<button
							className="flex outline-none p-3 my-3 bg-second text-white mx-5 rounded-xl shadow-lg font-Poppins font-medium cursor-pointer"
							onClick={handleBack}
						>
							<img src={back} alt="back" className="mt-2 mx-2" />
							Regresar
						</button>
					</div>

					<div className="rounded-lg bg-gray-100 mt-10 mx-6 pb-8 shadow-xl ring-1 ring-gray-300">
						<form onSubmit={handleSubmit}>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Título
								</p>
								<p className="text-gray-400 font-Poppins text-2s font-light ml-6 pb-2">
									Se específico y puntual por favor (Maximo 100 caracteres)
								</p>
								<input
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									required
									name="titulo"
									value={titulo}
									onChange={handleInputChange}
									type="text"
									maxLength={100}
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Descripción:
								</p>
								<div className="flex justify-between">
									<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
										Se breve y expresa en pocas palabras lo que deseas
										transmitir (Maximo 350 caracteres)
									</p>
								</div>

								<textarea
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-18 resize-none"
									required
									name="descBreve"
									value={descBreve}
									onChange={handleInputChange}
									maxLength={350}
								></textarea>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Detalles Generales:
								</p>
								<div className="flex justify-between">
									<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
										Descripcion completa y general de la pasantía
									</p>
								</div>

								<textarea
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-xl py-2 outline-none px-5 font-Poppins text-gray-700 h-36 resize-none"
									required
									name="descLarga"
									value={descLarga}
									onChange={handleInputChange}
								></textarea>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Habilidades Requeridas
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Añade las Habilidades necesarias e indispinsables para
									desempeñar la labor en cuestion
								</p>
								<input
									required
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									placeholder="Donimino de Office 2019, Excel Avanzado, etc."
									name="skills"
									value={skills}
									onChange={handleInputChange}
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Educacion y Experecia
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Agrega los conociemtos en educaion o niveles de esta
									requeridos
								</p>
								<input
									required
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									name="educacion"
									value={educacion}
									onChange={handleInputChange}
									placeholder="Donimino de Office 2019, Excel Avanzado, etc."
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Puesto de Trabajo
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Coloca el puesto de trabajo en concreto (Maximo 100
									caracteres)
								</p>
								<input
									required
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									name="puesto"
									value={puesto}
									maxLength={100}
									onChange={handleInputChange}
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Carreras Asociadas
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Anexa las carreras asociadas o relacionadas al puesto en
									cuestion
								</p>
								<input
									required
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									placeholder="Comunicación, Mercadotecnia, Adiministración de empresas, etc."
									name="carreras"
									value={carreras}
									onChange={handleInputChange}
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Jornada Laboral
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									Coloca la jornada laboral a la cual se sometera el pasante
									(Maximo 100 caracteres)
								</p>
								<input
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									name="jornada"
									value={jornada}
									maxLength={100}
									onChange={handleInputChange}
								/>
							</div>
							<div className="my-2 py-2">
								<p className="text-gray-600 font-Poppins font-medium text-lg p-5">
									Salario
								</p>
								<p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
									coloca el salario
								</p>
								<input
									className="mx-8 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
									type="text"
									name="salario"
									value={salario}
									onChange={handleInputChange}
								/>
							</div>
							<input
								type="submit"
								className="py-3 px-3 rounded-lg text-center bg-BlueSocial shadow-xl m-5 cursor-pointer font-Poppins font-medium text-white"
								value="Guardar"
								onClick={handleSubmit}
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewIntership;
