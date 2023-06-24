import "./Input.css";
import { classNames } from "../../utils/classNames";
import React from "react";

export const Input = ({
  id,
  name = "",
  value = "",
  onChange,
  label,
  errorMessage = "",
  placeholder = "",
  validation,
  maxLength = Infinity,
  type = "text",
  required = false,
  onInvalid,
}) => {
  const [error, setShowError] = React.useState("");

  const handleOnChange = ({ target: { value } }) => {
    if (value.length - 1 === Number(maxLength)) return;

    onChange?.(value);
    handleValidity(value);
  };

  const handleValidity = (value) => {
    if (!value) return setShowError("This field is required");
    if (validation?.(value)) return setShowError(errorMessage);

    setShowError("");
  };

  React.useEffect(() => onInvalid?.(error), [error, onInvalid]);

  return (
    <label
      className={`input-field${classNames({
        "input-field-invalid": error,
      })}`}
      htmlFor={id}
    >
      {label && <h3 className="input-field-label">{label}</h3>}

      <input
        className="input-field-input"
        id={id}
        name={name}
        onBlur={() => handleValidity(value)}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />

      <p className="input-field-error-msg">{error}</p>
    </label>
  );
};