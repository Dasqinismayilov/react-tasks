import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const decimalToHex = dec => dec.toString(16).padStart(2, '0');

  let red = Math.floor(Math.random() * (255 - 1)) + 1;
  let green = Math.floor(Math.random() * (255 - 1)) + 1;
  let blue = Math.floor(Math.random() * (255 - 1)) + 1;

  let color = "#" + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);
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
