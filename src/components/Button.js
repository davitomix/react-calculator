import React from 'react';
import PropTypes from 'prop-types';

const {style} = {
  border: 'dotted thin red',
  display: 'inline-block'
};

const Button = (props) => {
  return(
    <div style={style}>
      {props.name}
    </div>
  )
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Button;