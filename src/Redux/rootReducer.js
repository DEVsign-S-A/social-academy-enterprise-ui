import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "../Reducers/authReducer";
import { bussinesReducer } from "../Reducers/bussinesReducer";
import { intershipReducer } from "../Reducers/intershipReducer";
import { uiReducer } from "../Reducers/uiReducer";
import { userReducer } from "../Reducers/userReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ui", "auth", "bussines", "interships"],
};

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  bussines: bussinesReducer,
  interships: intershipReducer,
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
