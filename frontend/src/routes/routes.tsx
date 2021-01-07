import React from 'react';
import {BrowserRouter,Route, Switch} from "react-router-dom";
import RelatorioDepartamentos from '../modules/controleCustos/departamentos';
import { default as MargenericoApuracao, default as MargenericoCadastro, default as MargenericoRelatorios } from '../modules/controleCustos/movimentacoes';
import Home from '../modules/home';
import Login from '../modules/login/login';
import RelatorioGrupoCompra from '../modules/relatorios/grupoCompras';
import RelatorioGrupoFornecedores from '../modules/relatorios/grupoFornecedores';

const Routes = () => (
  <BrowserRouter basename="/compras">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/relatorios/departamentos" component={RelatorioDepartamentos} />
      <Route exact path="/relatorios/grupo-compras" component={RelatorioGrupoCompra} />
      <Route exact path="/margenericos/cadastro" component={MargenericoCadastro} />
      <Route exact path="/margenericos/relatorios" component={MargenericoRelatorios} />
      <Route exact path="/margenericos/apuracao" component={MargenericoApuracao} />
    </Switch>
  </BrowserRouter>
);

export default Routes;