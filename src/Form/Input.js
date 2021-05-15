import React from "react";

const Input = ({ name, type = "text", ...rest }) => {
  return (
    <label htmlFor={name}>
      {name}
      <input name={name} id={name} type={type} {...rest} />
    </label>
  );
};

export default Input;
