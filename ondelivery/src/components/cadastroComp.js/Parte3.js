import React from 'react';
import InputForm from '../InputForm';

class Parte3 extends React.Component {
  render() {
    return (
      <div>
        <div id="ap-bloco">
          <InputForm
            classNameInput="input-login"
            label="Mora em ap ?:"
            type="text"
            classNameLabel="label-login"
            placeholder="ap | 1002"
            name="inputCadastroAp"
            // value={ inputCadastroCep }
          />
          <InputForm
            classNameInput="input-login"
            type="text"
            classNameLabel="label-login"
            placeholder="bloco |"
            name="inputCadastroBloco"
            // value={ inputCadastroBairro }
          />
        </div>
        <InputForm
          classNameInput="input-login"
          label="Celular:"
          type="text"
          classNameLabel="label-login"
          placeholder="ap | 1002"
          name="inputCadastroCelular"
          // value={ inputCadastroCep }
        />
      </div>
    );
  }
}

export default Parte3;
