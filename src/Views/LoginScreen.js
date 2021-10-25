import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Components/UI_Login/style.css";
import im01 from "../Assets/UI_Login/imagen01.svg";
import im02 from "../Assets/UI_Login/imagen02.svg";
import im03 from "../Assets/UI_Login/imagen03.svg";
import RegisterScreen from "./RegisterScreen";
import { setToggleForm } from "../Redux/Actions/uiAction";
import { useForm } from "../Hook/useForm";
import { startLoginEmailPassword } from "../Redux/Actions/authAction";
const LoginScreen = () => {
	/**
	 * Aqui esta una parte que me vale verga si esta en vaniallaJS
	 * no pienso quitarme la vida haciendo algo inútil como quitar
	 * y agregar clases...
	 */
	const bullets = document.querySelectorAll(".bullets span");
	const images = document.querySelectorAll(".image");

	function moveSlider() {
		let index = this.dataset.value || "1";

		let currentImage = document.querySelector(`.img-${index}`);
		images.forEach((img) => img.classList.remove("show"));
		currentImage.classList.add("show");

		const textSlider = document.querySelector(".text-group");
		textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

		bullets.forEach((bull) => bull.classList.remove("active"));
		this.classList.add("active");
	}

	bullets.forEach((bullet) => {
		bullet.addEventListener("click", moveSlider);
	});

	//...aqui termina

	const { toggleForm } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	const handleToggleForm = () => {
		dispatch(setToggleForm(!toggleForm));
	};

	const initialForm = {
		email: "",
		password: "",
	};

	const [formValues, handleInputChange] = useForm(initialForm);

	const { email, password } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(startLoginEmailPassword(email, password));
	};

	return (
		<>
			<div
				id="main"
				className={`${toggleForm ? "sign-in-form" : "sign-up-mode"}`}
			>
				<div className="box my-20">
					<div className="inner-box">
						<div className="forms-wrap">
							<form
								action="index.html"
								autoComplete="off"
								className="sign-in-form"
								id="form"
								onSubmit={handleSubmit}
							>
								<div className="flex">
									<img
										src="https://res.cloudinary.com/socialacademy/image/upload/v1633466520/Social%20Academy%20Image/icons%20General/BLUEACADEM_Y_1_lj0ltd.png"
										alt="sociallog"
										className="w-10/12"
									/>
								</div>

								<div className="heading">
									<h2 className="text-second">Bienvenido</h2>

									<h6>¿Todavía no estas registrado?</h6>
									<p className="toggle" onClick={handleToggleForm}>
										Registrate
									</p>
								</div>

								<div className="actual-form">
									<div className="input-wrap">
										<input
											type="email"
											minLength="4"
											name="email"
											className="input-field"
											autoComplete="off"
											required
											value={email}
											placeholder="email"
											onChange={handleInputChange}
										/>
									</div>

									<div className="input-wrap">
										<input
											type="password"
											name="password"
											minLength="4"
											className="input-field"
											autoComplete="off"
											required
											value={password}
											placeholder="Contraseña"
											onChange={handleInputChange}
										/>
									</div>

									<input
										type="submit"
										value="Inicia"
										className="sign-btn"
										onClick={handleSubmit}
									/>
									<p className="text">
										O Inicia Sesión Con alguna de estas plataformas
									</p>
									<p className="text">
										¿Olvidaste tu contraseña?
										<p>Consigue ayuda</p> iniciando sesión
									</p>
								</div>
							</form>

							<RegisterScreen />
						</div>

						<div className="carousel">
							<div className="images-wrapper">
								<img src={im01} className="image img-1 show" alt="" />
								<img src={im02} className="image img-2" alt="" />
								<img src={im03} className="image img-3" alt="" />
							</div>

							<div className="text-slider">
								<div className="text-wrap">
									<div className="text-group">
										<h2>Crea tus ofertas de pasantías</h2>
										<h2>Busca personal capacitado</h2>
										<h2>Maximiza tu productividad</h2>
									</div>
								</div>

								<div className="bullets">
									<span className="active" data-value="1"></span>
									<span data-value="2"></span>
									<span data-value="3"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginScreen;
