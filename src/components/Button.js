import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
  };

  render() {
    const classNames = [
      'component-button',
      this.props.orange ? 'orange' : '',
      this.props.wide ? 'wide' : '',
    ];

    return (
      <div className={classNames.join(' ').trim()}>
        <button>{this.props.name}</button>
      </div>
    );
  }
}