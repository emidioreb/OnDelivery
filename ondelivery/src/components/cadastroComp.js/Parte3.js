import React from 'react';
import InputForm from '../InputForm';

class Parte3 extends React.Component {
  render() {
    return (
      <div>
        <div id="ap-bloco">
          <InputForm
            classNameInput="input-cadastro"
            label="Mora em ap ?"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="ap | 1002"
            name="inputCadastroAp"
            // value={ inputCadastroCep }
            id="inputCadastroAp"
          />
          <InputForm
            classNameInput="input-cadastro"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="bloco"
            name="inputCadastroBloco"
            // value={ inputCadastroBairro }
            id="inputCadastroBloco"
          />
        </div>
        <InputForm
          classNameInput="input-cadastro"
          label="Celular:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="(85)99990-0023"
          name="inputCadastroCelular"
          // value={ inputCadastroCep }
        />
      </div>
    );
  }
}

export default Parte3;
