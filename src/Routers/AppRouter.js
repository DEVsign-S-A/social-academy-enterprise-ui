import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";



import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import LoginScreen from "../Views/LoginScreen";
import RegisterScreen from "../Views/RegisterScreen";
import PageNoFound from "../Views/PageNoFound";

export const AppRouter = () => {
    
  const { firstName } = useSelector((state) => state.auth);

  return (
    <Router>
      <div>
        <Switch>
          {/* -------------------Rutas Publicas-------------------*/}

          <PublicRoute 
            exact path="/" 
            component={LoginScreen} 
            isAuth={!!firstName} 
          />

          <PublicRoute
            exact
            path="/register"
            component={RegisterScreen}
            isAuth={!!firstName}
          />

       
          <Route exact path="/error404" component={PageNoFound} />

          {/* -------------------Rutas Privadas-------------------*/}

        
         
          <Redirect to="/error404" />
        </Switch>
      </div>
    </Router>
  );
};
