import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 10) 
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > -10)
    setCounter(counter - 1);
  };


  return (
    <div style={{backgroundColor:color}}>
      <div> {counter}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
