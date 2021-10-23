import { types } from "../Types/type";

const initalState = {
	infoBussines: [],
};
export const bussinesReducer = (state = initalState, action) => {
	switch (action.type) {
		case types.loadInfo:
			return {
				...state,
				infoBussines: [...action.payload]
			};
		case types.logout:
			return {
				checking: true,
			};

		default:
			return state;
	}
};
