import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './App.css';
import calculate from '../logic/calculate';

const App = () => (
    <div id="app" className="component-app">
      <Display value='0.0'/>
      <ButtonPanel />
    </div>
);

export default App;