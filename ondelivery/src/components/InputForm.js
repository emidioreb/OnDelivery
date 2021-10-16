import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const {
      type, name, placeholder, label, classNameLabel,
      value, onChange, classNameInput, id,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name } className={ classNameLabel }>
          { label }
          <br />
          <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            className={ classNameInput }
            placeholder={ placeholder }
            id={ id }
          />
        </label>
      </div>
    );
  }
}

InputForm.propTypes = {
  classNameInput: PropTypes.string.isRequired,
  classNameLabel: PropTypes.string.isRequired,
  id: PropTypes.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputForm;
