import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RelatorioDepartamentos from '../modules/controleCustos/departamentos';
import RelatorioFuncionarios from '../modules/controleCustos/funcionarios';
import RelatorioMovimentacoes from '../modules/controleCustos/movimentacoes';
import Home from '../modules/home';
import Login from '../modules/login/login';

const Routes = () => (
  <BrowserRouter basename="/controle-custos">
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/relatorios/departamentos" component={RelatorioDepartamentos}/>
      <Route exact path="/relatorios/funcionarios" component={RelatorioFuncionarios} />
      <Route exact path="/relatorios/movimentacoes" component={RelatorioMovimentacoes}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;