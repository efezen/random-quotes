import React from "react";

const Buttons = (props) => {
  return (
    <div className="buttons">
      <button
        onClick={props.handleClick}
        id={props.id}
        className="button"
        style={{ color: "white", backgroundColor: props.backgroundColor }}
      >
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
