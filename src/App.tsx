import React from 'react';
import './App.css';
import { Greetings } from './components/HelloWorld/Greetings';

function App() {
  return (
    <div className="App">
      <Greetings name={"Juan"} lastName={"Lopez"}/>
    </div>
  );
}

export default App;
