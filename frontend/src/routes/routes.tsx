import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from '../modules/home';
import { isAuthenticated } from '../services/auth';
import Login from '../modules/login/login';
import RelatorioGrupoFornecedores from '../modules/relatorios/grupoFornecedores';
import RelatorioGrupoCompra from '../modules/relatorios/grupoCompras';
import MargenericoCadastro from '../modules/margenericos/relatorios';
import MargenericoRelatorios from '../modules/margenericos/relatorios';
import MargenericoApuracao from '../modules/margenericos/relatorios';


const Routes = () => (
  <BrowserRouter basename="/compras">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/relatorios/grupo-fornecedores" component={RelatorioGrupoFornecedores} />
      <Route exact path="/relatorios/grupo-compras" component={RelatorioGrupoCompra} />
      <Route exact path="/margenericos/cadastro" component={MargenericoCadastro} />
      <Route exact path="/margenericos/relatorios" component={MargenericoRelatorios} />
      <Route exact path="/margenericos/apuracao" component={MargenericoApuracao} />
    </Switch>
  </BrowserRouter>
);

export default Routes;