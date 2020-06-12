import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

export default () => (
  <Switch>
    <Route path="/produto/:id" component={ProductDetail} />
    <Route path="*" component={Home} />
  </Switch>
);
