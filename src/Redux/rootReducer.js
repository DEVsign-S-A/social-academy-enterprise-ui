import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "../Reducers/authReducer";
import { uiReducer } from "../Reducers/uiReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "ui"],
  };


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
})

export default persistReducer(persistConfig, rootReducer);