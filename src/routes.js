import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/produto/:id" component={ProductDetail} />
    </Switch>
  </Router>
);
