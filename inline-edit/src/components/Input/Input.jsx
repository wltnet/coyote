import React from "react";
import { Label, InputField } from "./styled";

const Input = ({ value, inputField, handleBlur, handleChange, handleKeyDown }) => (
  <Label>
    <InputField
      type="text"
      name={inputField.name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  </Label>
);
export default Input;
