import React from 'react';
import Parte1 from '../components/cadastroComp.js/Parte1';
import Parte2 from '../components/cadastroComp.js/Parte2';
import Parte3 from '../components/cadastroComp.js/Parte3';

class Cadastro extends React.Component {
  render() {
    return (
      <div id="cadastro">
        <h5>Cadastra-se</h5>
        <Parte1 />
        <Parte2 />
        <Parte3 />
      </div>
    );
  }
}
export default Cadastro;
