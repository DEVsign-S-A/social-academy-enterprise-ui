import {firebase, googleAuthProvider} from '../../FIrebase/Firebase'
export const startWithEmailandPass = (email, pass) =>{


    console.log(email, pass);
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithRedirect(googleAuthProvider)
        .then( userCred => {
            console.log(userCred);
        })
    }
}