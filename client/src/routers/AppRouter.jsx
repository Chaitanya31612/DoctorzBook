import React, { lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const LandingContainer = lazy(() => import("../containers/LandingContainer"));
const LoginContainer = lazy(() => import("../containers/auth/LoginContainer"));
const RegisterContainer = lazy(() =>
  import("../containers/auth/RegisterContainer")
);
const NotFoundContainer = lazy(() => import("../containers/NotFoundContainer"));

// import { LandingContainer, NotFoundContainer } from '../containers'

const AppRouter = () => {
  let location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="my-node" timeout={3000}>
        <Switch location={location}>
          <Route exact path="/" component={LandingContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/register" component={RegisterContainer} />
          <Route exact path="/dashboard" component={LandingContainer} />
          <Route path="/404" exact component={NotFoundContainer} />
          <Redirect to="/404" />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
