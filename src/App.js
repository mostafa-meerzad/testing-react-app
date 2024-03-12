import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
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
    <main>
      <h1 className="title">Counter</h1>

      <p className="count">{count}</p>

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
    </main>
  );
};
export default App;
