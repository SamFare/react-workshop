import React, { useState } from 'react'
import './App.css'

import CounterButton from './CounterButton/CounterButton'

function App() { 
  const [count, setCount] = useState(0)

  return (<div> 
              <h1 className="page-heading">Counter</h1>
              <div className="counter-container"> 
               <CounterButton onClick = {() => setCount(count - 1)}  text='-'/>
                <div data-testid="counter" className="counter-container-input" type='number'>{count}</div>
                <CounterButton onClick = {() => setCount(count + 1)} text='+'/>
              </div>
          </div>) 
}

export default App