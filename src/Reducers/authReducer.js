import { types } from "../Types/type";

const initalState = {
	checking: true,
    uid: "",
    displayName: "",
    UserData: {},
};
export const authReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.authLogin:
			return {
				...state,
				uid: action.payload.uid,
				displayName: action.payload.displayName,
				UserData: action.payload.UserData,
				checking: false,
			};
		case types.logout:
			return {
				checking: true,
			};

		default:
			return state;
	}
};
