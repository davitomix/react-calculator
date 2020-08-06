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
    // eslint-disable-next-line no-console
    console.log(newState);
    this.setState(newState);
  }

  render() {
    const { total, next, operation } = this.state;
    const value = next || operation || (isNaN(total)) ? 'Error' : total || '0';
    console.log(value);
    return (
      <div id="app" >
        <Display value={value.toString()} />
        <ButtonPanel clickHandler={this.handleClick}/>
      </div>
    );
  }
};