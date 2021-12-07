import React from "react";

export const Checkbox = (props) => {
  return (
    <input
      key={props._id}
      onClick={props.handleCheckChildElement}
      type="checkbox"
      checked={props.isChecked}
      value={props._id}
    />
  );
};

export default Checkbox;
