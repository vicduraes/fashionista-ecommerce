import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detalhe from './pages/Detalhe/Detalhe';
import CarrinhoDeCompra from './pages/CarrinhoDeCompra/CarrinhoDeCompra';

export default () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/detalhe-catalogo" component={Detalhe} />
    <Route path="/carrinho-compra" component={CarrinhoDeCompra} />
  </Switch>
);
