import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../pages'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/Login" />
        <Route component={Register} path="/Cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/Produtos" />
        <PrivateRoute component={Cart} path="/Carrinho" />

        <PrivateRoute component={Admin} path={paths.Orders} isAdmin />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProducts} isAdmin />
      </Switch>
    </Router>
  )
}

export default Routes
