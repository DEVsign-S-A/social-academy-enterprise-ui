import { types } from "../Types/type";

const initialState = {
    showSidebar: false,
    toggleForm: false,
    itemsSidebar: [
        {
            id: "1",
            name: "Teachers",
            image: `${"./assets/sidebar/pen.svg"}`,
            hide: false,
          },
          {
            id: "2",
            name: "Teacher Rates",
            image: `${"./assets/sidebar/program.svg"}`,
            hide: false,
          },
          {
            id: "3",
            name: "Register Lessons",
            image: `${"./assets/sidebar/diagram.svg"}`,
            hide: false,
          },
          {
            id: "4",
            name: "Mini chanllenges",
            image: `${"./assets/sidebar/finansas.svg"}`,
            hide: false,
          },
    ]
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.showSidebar:
            return {
                ...state,
                showSidebar: action.payload
            };
            case types.toggleForm:
                return{
                    ...state,
                    toggleForm: action.payload
                }
        default:
            return state;
    }
}