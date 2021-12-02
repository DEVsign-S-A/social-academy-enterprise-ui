import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
// import { Route } from "./Route";
import LoginScreen from "../Views/LoginScreen";
import IntershipRequest from "../Views/IntershipRequest";
import CreatesInterships from "../Views/CreatesInterships";
import NewIntership from "../Views/NewIntership";
import { FullIntership } from "../Components/Interships/FullIntership";
import { Footer } from "../Components/UI_Footer/Footer";
import { PublicRoute } from "./PublicRoute";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./PrivateRoute";
import MyProfileView from "../Views/MyProfileView";
import MyProfile from "../Views/MyProfile";
import ProfileScreen from "../Views/ProfileScreen";
import DashboardScreen from "../Views/DashboardScreen";

export const AppRouter = () => {
	const { uid } = useSelector((state) => state.auth);
	return (
		<>
			<Router>
				<div>
					<Switch>
						{/* -------------------Rutas Publicas-------------------*/}

						<PublicRoute
							exact
							path="/Login"
							component={LoginScreen}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/IntershipRequest"
							component={IntershipRequest}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/Dashboard"
							component={DashboardScreen}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/"
							component={MyProfileView}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/Edit/Profile"
							component={MyProfile}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/CreatesInterships"
							component={CreatesInterships}
							isAuth={!!uid}
						/>
						<PrivateRoute
							exact
							path="/NewIntership"
							component={NewIntership}
							isAuth={!!uid}
						/>
						<PrivateRoute
							exact
							path="/EditIntership/:IdIntership"
							component={FullIntership}
							isAuth={!!uid}
						/>
						<PrivateRoute
							exact
							path="/ProfileIntership/:IdIntership"
							component={FullIntership}
							isAuth={!!uid}
						/>

						<PrivateRoute
							exact
							path="/Profile/:userId"
							component={ProfileScreen}
							isAuth={!!uid}
						/>

						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
			<Footer />
		</>
	);
};
