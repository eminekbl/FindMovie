import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import links from "./data/links";

function App() {
  console.log(links);
  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Router>
      <NavBar links={links} />
      <Switch>{routeMaps}</Switch>
      <Route>
        <Redirect to="/404" />
      </Route>
    </Router>
  );
}

export default App;
