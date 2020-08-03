import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  border: 'dotted thin blue',
};

const Display = (props) => (
    <div style={styles}>
      {props.value}
    </div>
);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

Display.defaultProps = {
  value: '0',
};

export default Display;