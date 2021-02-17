import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div count={this.state.count} data-test="some-component" className="App">
        <a
          href="http://nirmalkar.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
        <br />
        <br />
        <br />
        <br />
        <span>
          <button
            data-test="increment-button"
            style={style.buttonStyles}
            onClick={() =>
              this.setState({
                ...this.state,
                count: count + 1,
              })
            }
          >
            Increment
          </button>
        </span>
        <span>
          <button
            data-test="decrement-button"
            style={{ ...style.buttonStyles, marginLeft: "1rem" }}
            onClick={() =>
              this.setState({
                ...this.state,
                count: count > 0 ? count - 1 : count,
              })
            }
          >
            Decrement
          </button>
        </span>
        <br />
        <h3 data-test="counter-display">count is {count}</h3>
      </div>
    );
  }
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
