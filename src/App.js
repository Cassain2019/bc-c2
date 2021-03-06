import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Room from './Room';
import Parent from './Parent';
import React, {useState} from 'react';
import ValueContext from './ValueContext';

function App({name, age}) {
let [number, setNumber] = useState(100);
let abc1 = useState(4500);
  return (
    <ValueContext.Provider value={abc1}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload by {name} & {age}
          <br/>
          <Hello firstname="Kashif Hussain"></Hello>
          <Room></Room>
          <Parent num={number}></Parent>
          <button onClick={()=>{setNumber(++number)}}>Update Numbers</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
