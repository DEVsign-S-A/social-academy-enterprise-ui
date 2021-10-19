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
import MyProfile from "../Views/MyProfile";
import IntershipRequest from "../Views/IntershipRequest";
import CreatesInterships from "../Views/CreatesInterships";
import NewIntership from "../Views/NewIntership";
import { Error404 } from "../Views/Error404";
import { FullIntership } from "../Components/Interships/FullIntership";
import { Footer } from "../Components/UI_Footer/Footer";
import { PrivateRoute } from "./PrivateRoute";

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
              path="/login"
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
              path="/"
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
