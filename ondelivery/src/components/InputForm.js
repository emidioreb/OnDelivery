import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const {
      type, idInput, name, placeholder,
      label, idLabel, value, onChange,
    } = this.props;
    return (
      <div>
        <label htmlFor={ name } id={ idLabel }>
          { label }
          <input
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ idInput }
            placeholder={ placeholder }
          />
        </label>
      </div>
    );
  }
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  idInput: PropTypes.string.isRequired,
  idLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
