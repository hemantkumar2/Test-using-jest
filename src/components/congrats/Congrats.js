import React from "react";

const Congrats = (props) => {
  console.log(props);
  if (props.success) {
    return (
      <div data-test="congrats-component">
        <span data-test="congrats-message">
          Congratulations! You guessed the word.
        </span>
      </div>
    );
  } else {
    return <div data-test="congrats-component"></div>;
  }
};

export default Congrats;
