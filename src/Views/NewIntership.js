import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Sidebar } from "../Components/sidebar/Sidebar";
import { Header } from "../Components/Header/Header";
//image
import back from "../Assets/UI_Forum/Arrow-Left.svg";
import { useForm } from "../Hook/useForm";
import Swal from "sweetalert2";

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
    puesto: "",
    jornada: "",
    salario: "",
  });

  const {
    titulo,
    descBreve,
    descLarga,
    puesto,
    jornada,
    salario,
  } = formValues;

  /*****Otra Opcion */
  const [inputSkills, setInputSkills] = useState([
    { skill: "" },
  ]);

  const handleChanges = (index, event) => {
    event.preventDefault();
    const values = [...inputSkills];
    values[index][event.target.name] = event.target.value;
    setInputSkills(values);
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    setInputSkills([...inputSkills, { skill: "" }]);
  };

  const handleRemoveSkill = (index, event) => {
    event.preventDefault();
    if(inputSkills.length <= 1){
      Swal.fire("Error", "Debe de incluir al menos un parametro en relacion a las habilidades", "warning");
      return;
    }

    const values = [...inputSkills];
    values.splice(index, 1);
    setInputSkills(values);
  };

  /*****************------------------ */


  /*****Otra Opcion */
  const [inputsEducation, setInputsEducation] = useState([
    { education: "" },
  ]);

  const handleChangesEducation = (index, event) => {
    event.preventDefault();
    const values = [...inputsEducation];
    values[index][event.target.name] = event.target.value;
    setInputsEducation(values);
  };

  const handleAddEducation = (event) => {
    event.preventDefault();
    setInputsEducation([...inputsEducation, { education: "" }]);
  };

  const handleRemoveEducation = (index, event) => {
    event.preventDefault();
    if(inputsEducation.length <= 1){
      Swal.fire("Error", "Debe de incluir al menos un parametro en relacion a la educaion", "warning");
      return;
    }

    const values = [...inputsEducation];
    values.splice(index, 1);
    setInputsEducation(values);
  };

  /*****************------------------ */


  /*****Otra Opcion */
  const [inputsCareers, setInputsCareers] = useState([
    { career: "" },
  ]);

  const handleChangesCareers = (index, event) => {
    event.preventDefault();
    const values = [...inputsCareers];
    values[index][event.target.name] = event.target.value;
    setInputsCareers(values);
  };

  const handleAddCareers = (event) => {
    event.preventDefault();
    setInputsCareers([...inputsCareers, { career: "" }]);
  };

  const handleRemoveCareers = (index, event) => {
    event.preventDefault();
    if(inputsCareers.length <= 1){
      Swal.fire("Error", "Debe de incluir al menos una carrera asociada la publicación", "warning");
      return;
    }

    const values = [...inputsCareers];
    values.splice(index, 1);
    setInputsCareers(values);
  };

  /*****************------------------ */

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      'titulo: ', titulo,
      'descBreve: ', descBreve,
      'descLarga: ', descLarga,
      'inputSkills: ', inputSkills,
      'inputsEducation: ', inputsEducation,
      'inputsCareers: ', inputsCareers,
      'puesto: ', puesto,
      'jornada: ', jornada,
      'salario: ', salario,
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
            <form>
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
                <div>
                  <p className="text-gray-600 font-Poppins font-medium text-lg p-5">
                    Habilidades Requeridas
                  </p>
                  <p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
                    Añade las Habilidades necesarias e indispinsables para
                    desempeñar la labor en cuestion (individualmente)
                  </p>

                  {inputSkills.map((inputSkill, index) => (
                    <div key={index} className="flex justify-between">
                      <input
                        type="text"
                        className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                        placeholder="Donimino de Office 2019, Excel Avanzado, etc."
                        name="skill"
                        label="skill"
                        value={inputSkill.skill}
                        onChange={(event) => handleChanges(index, event)}
                      />
                      <button
                        onClick={(event) => handleRemoveSkill(index, event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        onClick={(event) => handleAddSkill(event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-2 py-2">
                <p className="text-gray-600 font-Poppins font-medium text-lg p-5">
                  Educacion y Experecia
                </p>
                <p className="text-gray-400 font-Poppins font-light ml-6 pb-2">
                  Agrega los conociemtos en educaion o niveles de esta
                  requeridos (individualmente)
                </p>
                {inputsEducation.map((inputEducation, index) => (
                    <div key={index} className="flex justify-between">
                      <input
                        type="text"
                        className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                        placeholder="Diploma de bachiller, 3 año de universidad, etc."
                        name="education"
                        label="education"
                        value={inputEducation.education}
                        onChange={(event) => handleChangesEducation(index, event)}
                      />
                      <button
                        onClick={(event) => handleRemoveEducation(index, event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        onClick={(event) => handleAddEducation(event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  ))}
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
               
                {inputsCareers.map((inputCareers, index) => (
                    <div key={index} className="flex justify-between">
                      <input
                        type="text"
                        className="mx-8 my-3 w-11/12 bg-gray-50 ring-1 ring-gray-300 rounded-lg py-2 outline-none px-4 font-Poppins text-gray-700"
                        placeholder="Comunicación, Mercadotecnia, Adiministración de empresas, etc."
                        name="career"
                        label="career"
                        value={inputCareers.career}
                        onChange={(event) => handleChangesCareers(index, event)}
                      />
                      <button
                        onClick={(event) => handleRemoveCareers(index, event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        -
                      </button>
                      <button
                        onClick={(event) => handleAddCareers(event)}
                        className="m-2 bg-gray-200 rounded-full py-1 px-4 font-Poppins text-3xl text-gray-800 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  ))}
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
