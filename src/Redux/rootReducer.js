import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "../Reducers/authReducer";
import { bussinesReducer } from "../Reducers/bussinesReducer";
import { intershipReducer } from "../Reducers/intershipReducer";
import { uiReducer } from "../Reducers/uiReducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ['ui', "auth", "bussines", "interships"]
  };


const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    bussines: bussinesReducer,
    interships: intershipReducer,
})

export default persistReducer(persistConfig, rootReducer);