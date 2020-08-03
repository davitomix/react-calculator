import React from 'react';
import PropTypes from 'prop-types';

const {styles} = {
  border: 'dotted thick blue'
};

const Display = (props) => {
  return(
    <div style={styles}>
      {props.value}
    </div>
  )
};

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;