/* eslint-disable class-methods-use-this */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    const value = next || (isNaN(total)) ? 'Error' : total;
    return (
      <div id="app" >
        <Display value={value} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
};