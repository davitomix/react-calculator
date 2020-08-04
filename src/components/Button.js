import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: 'dotted thin red',
  display: 'inline-block',
};

const Button = (props) => (
    <div style={styles}>{props.name}</div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;