import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

// import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import LoginScreen from "../Views/LoginScreen";
import RegisterScreen from "../Views/RegisterScreen";
import MyProfile from "../Views/MyProfile";
import IntershipRequest from "../Views/IntershipRequest";
import CreatesInterships from "../Views/CreatesInterships";
import NewIntership from "../Views/NewIntership";
import { Error404 } from "../Views/Error404";
import { FullIntership } from "../Components/Interships/FullIntership";
import { Footer } from "../Components/UI_Footer/Footer";

export const AppRouter = () => {
  const { firstName } = useSelector((state) => state.auth);

  return (
    <>
      <Router>
        <div>
          <Switch>
            {/* -------------------Rutas Publicas-------------------*/}

            <PublicRoute
              exact
              path="/login"
              component={LoginScreen}
              isAuth={!!firstName}
            />

            <PublicRoute
              exact
              path="/register"
              component={RegisterScreen}
              isAuth={!!firstName}
            />

            <PublicRoute
              exact
              path="/IntershipRequest"
              component={IntershipRequest}
              isAuth={!!firstName}
            />

            <PublicRoute
              exact
              path="/"
              component={MyProfile}
              isAuth={!!firstName}
            />

            <PublicRoute
              exact
              path="/CreatesInterships"
              component={CreatesInterships}
              isAuth={!!firstName}
            />
            <PublicRoute
              exact
              path="/NewIntership"
              component={NewIntership}
              isAuth={!!firstName}
            />
            <PublicRoute
              exact
              path="/EditIntership/:IdIntership"
              component={FullIntership}
              isAuth={!!firstName}
            />

            <Route exact path="/error404" component={Error404} />

            {/* -------------------Rutas Privadas-------------------*/}
            <Redirect to="/error404" />
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
};
