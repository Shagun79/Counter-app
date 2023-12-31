import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="container">
        <h1> {count}</h1>
        <button onClick={increment}>+</button>

        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
