import PropTypes from 'prop-types';
import React from 'react';
import InputForm from '../InputForm';

class Parte3 extends React.Component {
  render() {
    const { ap, nameAp, bloco, nameBloco, celular, nameCelular, onChange } = this.props;
    return (
      <div>
        <div id="ap-bloco">
          <InputForm
            classNameInput="input-cadastro"
            label="Mora em ap ?"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="ap | 1002"
            name={ nameAp }
            value={ ap }
            id="inputCadastroAp"
            onChange={ onChange }
          />
          <InputForm
            classNameInput="input-cadastro"
            type="text"
            classNameLabel="label-cadastro"
            placeholder="bloco"
            name={ nameBloco }
            value={ bloco }
            id="inputCadastroBloco"
            onChange={ onChange }
          />
        </div>
        <InputForm
          classNameInput="input-cadastro"
          label="Celular:"
          type="text"
          classNameLabel="label-cadastro"
          placeholder="(85)99990-0023"
          name={ nameCelular }
          value={ celular }
          onChange={ onChange }
        />
      </div>
    );
  }
}

Parte3.propTypes = {
  ap: PropTypes.isRequired,
  bloco: PropTypes.isRequired,
  celular: PropTypes.isRequired,
  nameAp: PropTypes.isRequired,
  nameBloco: PropTypes.isRequired,
  nameCelular: PropTypes.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Parte3;
