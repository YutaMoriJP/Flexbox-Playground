import React from "react";

const Select = ({ value, options, onChange, type }) => {
  const handleChange = (event) => onChange(event.target.value);
  return (
    <label htmlFor={type} style={{ fontFamily: "arial" }}>
      {type}
      <select onChange={handleChange} value={value} id={type}>
        {options.map(({ id, value }) => {
          return (
            <option key={id} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
