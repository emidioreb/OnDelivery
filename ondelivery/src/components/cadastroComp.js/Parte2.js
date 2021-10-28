import PropTypes from 'prop-types';
import React from 'react';
import InputForm from '../InputForm';

class Parte2 extends React.Component {
  render() {
    const { rua, nameRua, numero, nameNumero, onChange } = this.props;
    return (
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Rua:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="Rúbia Sampaio"
          name={ nameRua }
          value={ rua }
          onChange={ onChange }
        />
        <InputForm
          classNameInput="input-cadastro"
          label="Número:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="1234"
          name={ nameNumero }
          value={ numero }
          id="inputCadastroNumero"
          onChange={ onChange }
        />
      </div>
    );
  }
}

Parte2.propTypes = {
  nameNumero: PropTypes.isRequired,
  nameRua: PropTypes.isRequired,
  numero: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
  rua: PropTypes.isRequired,
};

export default Parte2;
