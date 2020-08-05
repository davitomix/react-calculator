/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  static propTypes = {
    clickHandler: PropTypes.func.isRequired,
    name: PropTypes.string,
  };

  handleClick = (buttonName) => this.props.clickHandler(buttonName);

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name='AC' clickHandler={this.handleClick}/>
          <Button name='±' clickHandler={this.handleClick}/>
          <Button name='%' clickHandler={this.handleClick}/>
          <Button name='÷' clickHandler={this.handleClick} color='orange'/>
        </div>
        <div>
          <Button name='7' clickHandler={this.handleClick}/>
          <Button name='8' clickHandler={this.handleClick}/>
          <Button name='9' clickHandler={this.handleClick}/>
          <Button name='×' clickHandler={this.handleClick} color='orange'/>
        </div>
        <div>
          <Button name='4' clickHandler={this.handleClick}/>
          <Button name='5' clickHandler={this.handleClick}/>
          <Button name='6' clickHandler={this.handleClick}/>
          <Button name='-' clickHandler={this.handleClick} color='orange'/>
        </div>
        <div>
          <Button name='1' clickHandler={this.handleClick}/>
          <Button name='2' clickHandler={this.handleClick}/>
          <Button name='3' clickHandler={this.handleClick}/>
          <Button name='+' clickHandler={this.handleClick} color='orange'/>
        </div>
        <div>
          <Button name='0' clickHandler={this.handleClick} wide={true}/>
          <Button name='.' clickHandler={this.handleClick}/>
          <Button name='=' clickHandler={this.handleClick} color='orange'/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;