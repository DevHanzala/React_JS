import { useState } from 'react';
import './App.css';


function App() {
  let [counter,setCounter]=useState(0)
  const addValue = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      return newCounter === 20 ? 0 : newCounter;
    });
  };

  const removeValue = () => {
    setCounter(prevCounter => {
      const newCounter = prevCounter - 1;
      return newCounter < 0 ? 20 : newCounter;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chai Aur React</h1>
        <h2>Counter Value: {counter}</h2>
        <button onClick={addValue}>Add Value {counter}</button>
        <br/>
        <button onClick={removeValue}>Remove Value {counter}</button>
      </header>
    </div>
  );
}

export default App;
