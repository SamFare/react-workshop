import React from 'react';
import './App.css';

function App() {
  return (
    <div> 
      <h1 className="pageHeading">Counter</h1>
      <div className="counterContainer"> 
        <button className="counterContainerButton">-</button>
        <input className="counterContainerInput" type='text' defaultValue="0"/>
        <button className="counterContainerButton">+</button>
      </div>
  </div>
  );
}

export default App;
