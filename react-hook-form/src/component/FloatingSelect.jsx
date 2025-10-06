import React, { useCallback, useEffect, useRef, useState } from "react";

const FloatingSelect = ({ label, options = [], value, onChange, error = "",name }) => {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Memoize selected label from value
  useEffect(() => {
    const selectedOption = options.find((opt) => opt.value === value);
    setInputValue(selectedOption?.label || "");
  }, [value, options]);

  // Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsFocused(false);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = useCallback(
    (option) => {
      onChange(option.value);
      setInputValue(option.label);
      setIsOpen(false);
    },
    [onChange]
  );

  const handleInputChange = useCallback((e) => {
    setInputValue(e.target.value);
    setIsFocused(true);
  }, []);

  return (
    <div className="floating-wrapper">
      <div
        className={`floating-container${isFocused ? " focused" : ""}${
          value ? " has-value" : ""
        }${error ? " error" : ""}`}
        ref={dropdownRef}
      >
        <label className={`floating-label`}>{label}</label>

        <input
          type="text"
          className="floating-field"
          onFocus={() => {
            setIsFocused(true);
            setIsOpen(true);
          }}
          value={inputValue}
          onChange={handleInputChange}
          aria-haspopup="listbox"
          aria-expanded={isFocused}
          aria-controls="dropdown-options"
          autoComplete="off"
          readOnly={true}
        />

        <div className={`floating-dropdown-menu ${isOpen ? "open" : ""}`}>
          <ul className="floating-dropdown-options">
            {options.length === 0 ? (
              <li className="floating-dropdown-item">No options found</li>
            ) : (
              options.map((option, index) => (
                <li
                  key={index}
                  role="option"
                  tabIndex={0}
                  className={`floating-dropdown-item ${
                    value === option.value ? "selected" : ""
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
      {error && <span className="error-msg">{error}</span>}
    </div>
  );
};

export default React.memo(FloatingSelect);
