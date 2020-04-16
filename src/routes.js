import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Detalhe from './pages/Detalhe/Detalhe';
import CarrinhoDeCompra from './pages/CarrinhoDeCompra/CarrinhoDeCompra';

export default () => (
  <Switch>
    <Route path="/detalhe-catalogo" component={Detalhe} />
    <Route path="/carrinho-compra" component={CarrinhoDeCompra} />
    <Route path="*" component={Home} />
  </Switch>
);
