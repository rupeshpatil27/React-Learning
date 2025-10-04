import { useState } from "react";

export default function FloatingInput({
  label,
  error = "",
  type = "text",
  placeholder,
  name,
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="input-control">
      <div className={`floating-container${error ? " error" : ""}`}>
        <input
          type={type}
          name={name}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused || (error && !rest.value) ? placeholder : ""}
          className="floating-input"
          autoComplete="off"
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          required
          {...rest}
        />

        <label className="floating-label">{label}</label>
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
}
