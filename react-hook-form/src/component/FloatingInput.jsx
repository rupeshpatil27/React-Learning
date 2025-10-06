import React, { useState } from "react";

function FloatingInput({
  label,
  value="",
  onChange,
  onFocus,
  onBlur,
  error = "",
  type = "text",
  name,
  placeholder = "",
  required = true,
  id,
  className = "",
  autoComplete = "off",
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);

  const inputId = id || `floating-input-${name}`;

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };

  return (
    <div className="floating-wrapper">
      <div className={`floating-container${isFocused ? " focused" : ""}${
        value ? " has-value" : ""
      }${error ? " error" : ""}`}>
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="floating-field"
          autoComplete={autoComplete}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          required={required}
          {...rest}
        />

        <label
          htmlFor={inputId}
          className={`floating-label`}
        >
          {label}
        </label>
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}

export default React.memo(FloatingInput);