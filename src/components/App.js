/* eslint-disable class-methods-use-this */
import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  render() {
    return (
      <div id="app" >
        <Display value='0' />
        <ButtonPanel />
      </div>
    );
  }
};