import Swal from "sweetalert2";
import {
	firebase,
	githubAuthProvider,
	googleAuthProvider,
} from "../../firebase/firebase-config";
import { types } from "../../Types/type";
import { activeUser, createNewProfile, existeUsuario } from "./bussinesInfo";

export const startNewRegisterEmailPasswordName = (email, password, name) =>{
	return (dispatch) =>{
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(async ({user}) =>{
				await user.updateProfile({
					displayName: name
				});
				dispatch(createNewProfile(user.uid, user.displayName, user.email));
				dispatch(activeUser(user.uid));
			})
	}
}

export const startNewLoginEmailPassword = (email, password) =>{
	return async (dispatch) =>{
		return firebase.auth().signInWithEmailAndPassword(email, password)
			.then(({user}) =>{
				dispatch(activeUser(user.uid));
			}).catch(e =>{
				Swal.fire('Error', e.message, 'error');
			})
	}
}

/*export const startLoginEmailPassword = (email, pass) => {
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
				// console.log(e);
			});
	};
};*/

export const startLoginWithGoogle = () => {
	return async (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(googleAuthProvider)
			.then(async (user) => {
				const usuario = await existeUsuario(user.user.uid);
				if(usuario === false){
					dispatch(createNewProfile(user.user.uid, user.user.displayName, user.user.email))
				}
				dispatch(activeUser(user.user.uid));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				// console.log(e);
			});
	};
};

export const startLoginWithGithub = () => {
	return (dispatch) => {
		firebase
			.auth()
			.signInWithPopup(githubAuthProvider)
			.then(async (user) => {
				const usuario = await existeUsuario(user.user.uid);
				if(usuario === false){
					dispatch(createNewProfile(user.user.uid, user.user.displayName, user.user.email))
				}
				dispatch(activeUser(user.user.uid));
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				// console.log(e);
			});
	};
};

/*export const startRegister = (name, email, pass) => {
	return (dispatch) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, pass)
			.then(async (user) => {
				await user.user.updateProfile({ displayName: name });
				// console.log(user);
				dispatch(
					login(user.user.uid, user.user.displayName, user.additionalUserInfo)
				);
			})
			.catch((e) => {
				Swal.fire("Error", e.message, "warning");
				// console.log(e);
			});
	};
};*/

export const login = (businessInfo) => {
	return {
		type: types.authLogin,
		payload: {
			...businessInfo
		},
	};
};

export const startLogout = () =>({
    type: types.logout,
    
})
