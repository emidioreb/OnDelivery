import React from 'react';
import InputForm from '../InputForm';

class Parte2 extends React.Component {
  render() {
    return (
      <div>
        <InputForm
          classNameInput="input-login"
          label="Rua:"
          type="text"
          classNameLabel="label-login"
          placeholder="Rúbia Sampaio"
          name="inputCadastroRua"
          // value={ inputCadastroRua }
        />
        <InputForm
          classNameInput="input-login"
          label="Número:"
          type="text"
          classNameLabel="label-login"
          placeholder="1234"
          name="inputCadastroNumero"
          // value={ inputCadastroNumero }
        />
      </div>
    );
  }
}

export default Parte2;
