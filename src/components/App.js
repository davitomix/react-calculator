import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => (
    <div id="app">
      <Display value='0.0'/>
      <ButtonPanel />
    </div>
);

export default App;