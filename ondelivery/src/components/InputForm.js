import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const {
      type, name, placeholder,
      value, onChange, classNameInput,
    } = this.props;
    return (
      <div>
        {/* <label htmlFor={ name } className={ classNameLabel }>
          { label } */}
        <input
          type={ type }
          name={ name }
          value={ value }
          onChange={ onChange }
          className={ classNameInput }
          placeholder={ placeholder }
        />
        {/* </label> */}
      </div>
    );
  }
}

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  // label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classNameInput: PropTypes.string.isRequired,
  // classNameLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputForm;
