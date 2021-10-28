import PropTypes from 'prop-types';
import React from 'react';
import InputForm from '../InputForm';

class Parte1 extends React.Component {
  render() {
    const {
      nome, cep,
      bairro, nameNome, nameCep, nameBairro, onChange } = this.props;
    return (
      <div>
        <InputForm
          classNameInput="input-cadastro"
          label="Nome:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="José da Silva"
          name={ nameNome }
          value={ nome }
          onChange={ onChange }
        />
        <div id="cep-bairro">
          <InputForm
            classNameInput="input-cadastro"
            label="CEP:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="00.000-000"
            name={ nameCep }
            value={ cep }
            id="inputCadastroCep"
            onChange={ onChange }
          />
          <InputForm
            classNameInput="input-cadastro"
            label="Bairro:"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="Centro"
            name={ nameBairro }
            value={ bairro }
            id="inputCadastroBairro"
            onChange={ onChange }
          />
        </div>
      </div>
    );
  }
}

Parte1.propTypes = {
  bairro: PropTypes.isRequired,
  cep: PropTypes.isRequired,
  nameBairro: PropTypes.isRequired,
  nameCep: PropTypes.isRequired,
  nameNome: PropTypes.isRequired,
  nome: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Parte1;
