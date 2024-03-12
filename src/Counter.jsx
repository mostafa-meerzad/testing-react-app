import { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const changeSing = () => {
    setCount(count * -1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <h1 className="title">Counter</h1>

      <p className="count" data-testid="initial-count">{count}</p>

      <div className="btn-container">
        <button className="btn" onClick={increment}>
          +
        </button>
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn" onClick={changeSing}>
          +/-
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
      </div>
    </div>
  );
};
export default Counter;
