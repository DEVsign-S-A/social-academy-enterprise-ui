import React from "react";
import "../Components/UI_Login/style.css";
import { useDispatch, useSelector } from "react-redux";
import { setToggleForm } from "../Redux/Actions/uiAction";
import { useForm } from "../Hook/useForm";
import Swal from "sweetalert2";
import { startNewRegisterEmailPasswordName } from "../Redux/Actions/authAction";
import { SocialIcons } from "../Components/UI_Login/SocialIcons";

const RegisterScreen = () => {
	const { toggleForm } = useSelector((state) => state.ui);

	const dispatch = useDispatch();

	const handleToggleForm = () => {
		dispatch(setToggleForm(!toggleForm));
	};

	const initialForm = {
		name: "",
		email: "",
		password: "",
		password2: "",
	};

	const [formValues, handleInputChange] = useForm(initialForm);

	const { name, email, password, password2 } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			Swal.fire(
				"Error",
				"Coloque correctamente la contraseña, estas no coinciden",
				"error"
			);
			return;
		}
		dispatch(startNewRegisterEmailPasswordName(email, password, name));
	};

	return (
		<>
			<form
				action="index.html"
				id="form"
				autoComplete="off"
				className="sign-up-form"
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
					<h2>Empecemos</h2>
					<h6>¿Ya tienes una cuenta?</h6>
					<p className="toggle" onClick={handleToggleForm}>
						Inicia Sesión
					</p>
				</div>

				<div className="actual-form">
					<div className="input-wrap">
						<input
							type="text"
							minLength="4"
							className="input-field"
							autoComplete="off"
							required
							placeholder="Nombre"
							name="name"
							id="name"
							value={name}
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-wrap">
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							className="input-field"
							autoComplete="off"
							required
							placeholder="Email"
							onChange={handleInputChange}
						/>
					</div>

					<div className="input-wrap">
						<input
							type="password"
							name="password"
							id="password"
							value={password}
							minLength="4"
							className="input-field"
							autoComplete="off"
							required
							placeholder="Contraseña"
							onChange={handleInputChange}
						/>
					</div>
					<div className="input-wrap">
						<input
							type="password"
							minLength="4"
							name="password2"
							id="password2"
							value={password2}
							className="input-field"
							autoComplete="off"
							required
							placeholder="Repita su contraseña"
							onChange={handleInputChange}
						/>
					</div>

					<input type="submit" value="Registrate" className="sign-btn" />

					<p className="text">O Registrate Con alguna de estas plataformas</p>
				</div>
			</form>
			<SocialIcons />
		</>
	);
};

export default RegisterScreen;
