import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const [counterIsNegative, setCounterIsNegative] = useState(false);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  const restart = () => {
    setCount(0);
  };

  const switchSigns = () => {
    setCounterIsNegative(!counterIsNegative);
    setCount((prev) => prev * -1);
  };

  return (
    <div>
      <h1>
        Count: <h3>{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>
          Make Counter {counterIsNegative ? "Positive" : "Negative"}
        </button>
      </div>
    </div>
  );
}

export default Counter;
