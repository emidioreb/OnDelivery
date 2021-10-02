import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Login,
  Cadastro,
} from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/cadastro" component={ Cadastro } />
    </Switch>
  );
}

export default App;
