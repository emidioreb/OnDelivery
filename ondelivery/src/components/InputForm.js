import React from 'react';
import PropTypes from 'prop-types';

class InputForm extends React.Component {
  render() {
    const { type, id, name, placeholder, label } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { label }
          <input
            type={ type }
            name={ name }
            // value={ value }
            // onChange={ onChange }
            id={ id }
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
  // value: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  // onChange: PropTypes.func,
};

export default InputForm;
