import React, { lazy } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../components/Dashboard/dashboard";
import Landing from "../components/Landing/Landing";
const LandingContainer = lazy(() => import("../containers/LandingContainer"));
const LoginContainer = lazy(() => import("../containers/auth/LoginContainer"));
const RegisterContainer = lazy(() =>
  import("../containers/auth/RegisterContainer")
);
const NotFoundContainer = lazy(() => import("../containers/NotFoundContainer"));

// import { LandingContainer, NotFoundContainer } from '../containers'
const setRoute=(path)=>{
  switch(path){
    case "dashboard" : return <Dashboard/>
    case "aaa" : return <Landing/>
    default : return <NotFoundContainer/>
  }
}
const AppRouter = () => {
  let location = useLocation();
  let routes=["dashboard","aaa"]
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames='my-node' timeout={3000}>
        <Switch location={location}>
          <Route exact path='/' component={LandingContainer} />
          <Route exact path='/login' component={LoginContainer} />
          <Route exact path='/register' component={RegisterContainer} />
          {routes.some(key =>location.pathname.substring(1,location.pathname.length) === key) && routes.map(route=>
            route === location.pathname.substring(1,location.pathname.length) && <PrivateRouter user={true} childern={setRoute(route)}/>
          )
          }
          <Route path='/404' exact component={NotFoundContainer} />
          <Redirect to='/404' />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AppRouter;
