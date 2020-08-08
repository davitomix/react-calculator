import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {

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

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;