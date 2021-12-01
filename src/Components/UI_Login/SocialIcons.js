import React from "react";
import { useDispatch } from "react-redux";
import { startLoginWithGithub, startLoginWithGoogle } from "../../Redux/Actions/authAction";

export const SocialIcons = () => {
	const dispatch = useDispatch();
	//TODO: Crear el Dispatch
	const handleGoogleLogin = () => {
		dispatch(startLoginWithGoogle());
	};

	const handleGithubLogin = () => {
		dispatch(startLoginWithGithub());
	};
	return (
		<div className="flex justify-center items-center my-2">
			<button onClick={handleGoogleLogin} className="sign-btn-social mx-5">
				<i className="fab fa-google"></i>
			</button>

			<button className="sign-btn-social" onClick={handleGithubLogin}>
				<i className="fab fa-github"></i>
			</button>
		</div>
	);
};
