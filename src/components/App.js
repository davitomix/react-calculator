import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display'

const App = () => {
  return (
    <div id="app" className="app">
      <Display/>
      <ButtonPanel />
    </div>
  )
};

export default App;