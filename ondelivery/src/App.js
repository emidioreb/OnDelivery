import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { CadastroProvider } from './hooks/useCadastro';
import { CardapioProvider } from './hooks/useCardapio';
import {
  Login,
  Cadastro,
  Cardapio,
} from './pages/index';

function App() {
  return (
    <CadastroProvider>
      <CardapioProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/cadastro" component={ Cadastro } />
          <Route exact path="/cardapio" component={ Cardapio } />
        </Switch>
      </CardapioProvider>
    </CadastroProvider>
  );
}

export default App;
