import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { AppRouter } from "./Routers/AppRouter.js";

export const SocialAcademyApp = () => {
	return (
		<>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<AppRouter />
				</PersistGate>
			</Provider>
		</>
	);
};
