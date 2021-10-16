import React from 'react';
import InputForm from '../InputForm';

class Parte2 extends React.Component {
  render() {
    return (
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Rua:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="Rúbia Sampaio"
          name="inputCadastroRua"
          // value={ inputCadastroRua }
        />
        <InputForm
          classNameInput="input-cadastro"
          label="Número:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="1234"
          name="inputCadastroNumero"
          // value={ inputCadastroNumero }
          id="inputCadastroNumero"
        />
      </div>
    );
  }
}

export default Parte2;
