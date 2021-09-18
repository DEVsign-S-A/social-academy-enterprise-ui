import { types } from "../Types/type";

const initalState = {
    checking: true,
    // id: null,
    // name: null
}
export const authReducer = (state = initalState, action) => {
    switch (action.type) {

        case types.login:
            return{
                ...state,
                ...action.payload,
                checking: false
            }    
        case types.logout:
            console.log('redux log out')
            return{
                checking: true,
            }
           
        default:
            return state;
    }
}
