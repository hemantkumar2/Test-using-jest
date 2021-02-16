import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div count={count} data-test="some-component" className="App">
      <a href="http://nirmalkar.com" target="_blank" rel="noopener noreferrer">
        My Portfolio
      </a>
      <br />
      <br />
      <br />
      <br />
      <button
        data-test="increment-button"
        style={style.buttonStyles}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <br />
      <h3 data-test="increment-counter">count is {count}</h3>
    </div>
  );
}

const style = {
  buttonStyles: {
    background: "#666666",
    color: "#ffffff",
    border: "none",
    width: "100px",
    height: "30px",
  },
};

export default App;

export const Sum = ({ a, b }) => a + b;

export const TotalPrice = ({ a, b }) => `$${Sum({ a, b })}`;
