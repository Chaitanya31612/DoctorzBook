import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import Preloader from "./components/Preloader/Preloader";

// components
import { AppRouter } from "./routers";

// styles
import "./styles/styles.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <Provider store={store}>
        <Router>
          <AppRouter />
        </Router>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
