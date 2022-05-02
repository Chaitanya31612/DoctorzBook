import React, { lazy, useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Booking from "../components/Dashboard/Booking";
import DashboardContainer from "../containers/DashboardContainer";
import { loadUser } from "../redux/actions/auth";
import { store } from "../redux/store/store";
import setAuthToken from "../utils/setAuthToken";
import PrivateRoute from "./PrivateRoute";
import AppointmentContainer from "../containers/AppointmentContainer";

const LandingContainer = lazy(() => import("../containers/LandingContainer"));
const LoginContainer = lazy(() => import("../containers/auth/LoginContainer"));
const RegisterContainer = lazy(() =>
  import("../containers/auth/RegisterContainer")
);
const NotFoundContainer = lazy(() => import("../containers/NotFoundContainer"));

// import { LandingContainer, NotFoundContainer } from '../containers'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const AppRouter = () => {
  let location = useLocation();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="my-node" timeout={3000}>
        <Switch location={location}>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <PrivateRoute
            exact
            path="/dashboard"
            component={DashboardContainer}
          />
          <PrivateRoute exact path="/doctor/:id" component={Booking} />
          <PrivateRoute
            exact
            path="/appointments"
            component={AppointmentContainer}
          />
          <Route path="/404" exact component={NotFoundContainer} />
          <Redirect to="/404" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
