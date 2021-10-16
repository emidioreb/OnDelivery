import React from 'react';
import InputForm from '../InputForm';

class Parte1 extends React.Component {
  render() {
    return (
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Nome:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="José da Silva"
          name="inputCadastroNome"
          // value={ inputCadastroNome }
        />
        <InputForm
          classNameInput="input-cadastro"
          label="Email:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="exemplo@gmail.com"
          name="inputCadastroEmail"
          // value={ inputCadastroEmail }
        />
        <div id="cep-bairro">
          <InputForm
            classNameInput="input-cadastro"
            label="CEP:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="00.000-000"
            name="inputCadastroCep"
            // value={ inputCadastroCep }
            id="inputCadastroCep"
          />
          <InputForm
            classNameInput="input-cadastro"
            label="Bairro:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="Centro"
            name="inputCadastroBairro"
            // value={ inputCadastroBairro }
            id="inputCadastroBairro"
          />
        </div>
      </div>
    );
  }
}

export default Parte1;
