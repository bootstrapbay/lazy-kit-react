import React from 'react';
import { routes } from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './fontawesome';

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={ () => {
                return (
                  <route.layout>
                    <route.component />
                  </route.layout>
                )
              }}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
