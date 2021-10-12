import React from 'react';
import PropTypes from 'prop-types';

class ButtonForm extends React.Component {
  render() {
    const { label, id } = this.props;
    return (
      <div>
        <button type="button" id={ id }>
          { label }
        </button>
      </div>
    );
  }
}

ButtonForm.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonForm;
