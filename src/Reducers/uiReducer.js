import { types } from "../Types/type";

const initialState = {
    showSidebar: false,
    toggleForm: true,
    itemsSidebar: [
        {
            id: "1",
            name: "Mi Perfil",
            image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/manager_j3yq64.svg`,
            hide: false,
          },
          {
            id: "2",
            name: "Solicitudes",
            image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/books_kc0mcd.svg`,
            hide: false,
          },
          {
            id: "3",
            name: "Nueva Oferta",
            image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/growth_iy55te.svg`,
            hide: false,
          },
          {
            id: "4",
            name: "DashBoards",
            image: `https://res.cloudinary.com/socialacademy/image/upload/v1633471289/Social%20Academy%20Image/icons%20General/quality_pvflxp.svg`,
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