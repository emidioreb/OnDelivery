import React from 'react';
import Parte1 from '../components/cadastroComp.js/Parte1';
import Parte2 from '../components/cadastroComp.js/Parte2';
import Parte3 from '../components/cadastroComp.js/Parte3';

class Cadastro extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      cep: '',
      bairro: '',
      rua: '',
      numero: '',
      ap: '',
      bloco: '',
      celular: '',
    };
    this.handleCadastro = this.handleCadastro.bind(this);
  }

  handleCadastro({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nome, cep, bairro, rua, numero, ap, bloco, celular } = this.state;
    return (
      <div id="cadastro">
        <h5>Cadastra-se:</h5>
        <Parte1
          nameNome="nome"
          nome={ nome }
          nameCep="cep"
          cep={ cep }
          nameBairro="bairro"
          bairro={ bairro }
          onChange={ this.handleCadastro }
        />
        <Parte2
          nameRua="rua"
          rua={ rua }
          nameNumero="numero"
          numero={ numero }
          onChange={ this.handleCadastro }
        />
        <Parte3
          nameAp="ap"
          ap={ ap }
          nameBloco="bloco"
          bloco={ bloco }
          nameCelular="celular"
          celular={ celular }
          onChange={ this.handleCadastro }
        />
      </div>
    );
  }
}
export default Cadastro;
