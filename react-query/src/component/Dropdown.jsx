import { useEffect, useRef, useState } from "react";

const Dropdown = ({ value, handleChange, dropdownOptions,dropdownTitle="Select" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    handleChange({ target: { value } });
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left max-w-[10rem] w-full" ref={dropdownRef}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          } else if (e.key === "Escape") {
            setIsOpen(false);
          }
        }}
        className="w-full inline-flex items-center justify-between border border-[rgba(132,139,200,0.18)] rounded-lg px-3 py-1.5 text-sm font-normal text-black hover:border-blue-500 transition-all"
      >
        <span className="truncate block max-w-full">{value.replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()) || dropdownTitle}</span>
        <span className="float-right">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            className={`text-[#757575] transition-all duration-200 ${isOpen ? " rotate-180" : " rotate-0"
              }`}
            aria-hidden="true"
          >
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg>
        </span>
      </button>

      <div
        className={`absolute z-10 mt-1 w-50 left-1/2 -translate-x-1/2 bg-white rounded-lg [box-shadow:2px_3px_5px_-1px_rgba(0,0,0,0.5)]
 transition-all duration-200 overflow-hidden ${isOpen ? "opacity-100 scale-[1] -translate-y-0" : "opacity-0 scale-[0.99] -translate-y-[0.7rem] origin-top pointer-events-none"
          }`}
      >
        <ul className="p-1 text-sm text-black">
          {dropdownOptions.map((option) => (
            <li
              key={option}
              aria-selected={value === option} // see next
              onClick={() => handleSelect(option)}
              className={`cursor-pointer rounded-md px-4 py-2 ${value === option
                ? "bg-blue-100 font-semibold"
                : "hover:bg-[#f6f6f6]"
                }`}
            >
              {option
                .replace(/-/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase())}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
