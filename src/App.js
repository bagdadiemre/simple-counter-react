import { useState } from "react";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  function incrementBy5() {
    setCount(count + 5);
  }
  function decrementBy5() {
    setCount(count - 5);
  }
  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={reset} disabled={count === 0}>
          R
        </button>
      </div>
      <div>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <button onClick={increment}>+</button>
      </div>
      <div>
        <button onClick={decrementBy5} disabled={count - 5 < 0}>
          -5
        </button>
        <button onClick={incrementBy5}>+5</button>
      </div>
    </div>
  );
}

export default App;
