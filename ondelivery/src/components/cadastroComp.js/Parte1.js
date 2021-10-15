import React from 'react';
import InputForm from '../InputForm';

class Parte1 extends React.Component {
  render() {
    return (
      <div>
        <InputForm
          classNameInput="input-login"
          label="Nome:"
          type="text"
          classNameLabel="label-login"
          placeholder="Seu nome"
          name="inputCadastroNome"
          // value={ inputCadastroNome }
        />
        <InputForm
          classNameInput="input-login"
          label="Email:"
          type="text"
          classNameLabel="label-login"
          placeholder="exemplo@gmail.com"
          name="inputCadastroEmail"
          // value={ inputCadastroEmail }
        />
        <div id="cep-bairro">
          <InputForm
            classNameInput="input-login"
            label="CEP:"
            type="text"
            classNameLabel="label-login"
            placeholder="00.000-000"
            name="inputCadastroCep"
            // value={ inputCadastroCep }
          />
          <InputForm
            classNameInput="input-login"
            label="Bairro:"
            type="text"
            classNameLabel="label-login"
            placeholder="Centro"
            name="inputCadastroBairro"
            // value={ inputCadastroBairro }
          />
        </div>
      </div>
    );
  }
}

export default Parte1;
