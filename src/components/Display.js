/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = props => (
  <div className="component-display">
    <div>
      {props.value || '0'}
    </div>
  </div>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
