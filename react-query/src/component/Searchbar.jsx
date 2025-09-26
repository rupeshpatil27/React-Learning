import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router";
import { autoSuggest } from "../api/product";
import { useQuery } from "@tanstack/react-query";

const Searchbar = () => {
  const [input, setInput] = useState("");

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { q: input }],
    queryFn: autoSuggest,
  });

  return (
    <>
      <div className="search-container" ref={dropdownRef}  onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineSearch className="search-icon" />
        <div className="search-box">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search...."
            className="search-input"
          />
        </div>

        <div
          className={`absolute z-10 mt-1 w-full bg-white rounded-lg [box-shadow:2px_3px_5px_-1px_rgba(0,0,0,0.5)]
 transition-all duration-200 overflow-hidden ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
            }`}
        >
          <ul className="p-1 text-sm text-black">
            {data?.products.map((r,i) => (
              <li
                key={i.id}
                
                className={`cursor-pointer rounded-md px-4 py-2 hover:bg-[#f6f6f6]}`}
              >
                {r.title}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </>
  );
};

export default Searchbar;
