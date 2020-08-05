import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func.isRequired,
  };

  handleClick = () => this.props.clickHandler(this.props.name);

  render() {
    const classNames = [
      'component-button',
      this.props.color === 'orange' ? 'orange' : '',
      this.props.wide ? 'wide' : '',
    ];

    return (
      <div className={classNames.join(' ').trim()}>
        <button onClick={this.handleClick}>{this.props.name}</button>
      </div>
    );
  }
}