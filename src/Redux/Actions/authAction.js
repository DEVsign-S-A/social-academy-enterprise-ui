import Swal from "sweetalert2";
import {
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../../firebase/firebase-config";
import { types } from "../../Types/type";

export const startLoginEmailPassword = (email, pass) => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, pass)
			.then((user) => {
				dispatch(
					login(user.user.uid, user.user.displayName, user.additionalUserInfo)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				console.log(e);
			});
	};
};

export const startLoginWhitGoogle = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then((user) => {
				console.log(user);
				dispatch(
					login(user.user.uid, user.user.displayName, user.additionalUserInfo)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				console.log(e);
			});
	};
};

export const startLoginWhitGithub = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
			.then((user) => {
				dispatch(
					login(user.user.uid, user.user.displayName, user.additionalUserInfo)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				console.log(e);
			});
	};
};

export const startRegister = (name, email, pass) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, pass)
			.then(async (user) => {
				await user.user.updateProfile({ displayName: name });
				console.log(user);
				dispatch(
					login(user.user.uid, user.user.displayName, user.additionalUserInfo)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				console.log(e);
			});
	};
};

export const login = (uid, displayName, UserProfile) => {
	return {
		type: types.authLogin,
		payload: {
			uid,
			displayName,
			UserData: {
				...UserProfile,
			},
		},
	};
};
