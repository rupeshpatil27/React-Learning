import { autoSuggest } from "../api/product";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "../hook/useDebounce.js";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";

const Searchbar = () => {
  const [input, setInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const searchConRef = useRef(null);

  const debouncedInput = useDebounce(input, 500);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchConRef.current &&
        !searchConRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { q: debouncedInput }],
    queryFn: autoSuggest,
    enabled: debouncedInput.trim().length > 0,
    staleTime: 60 * 1000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div
        className={`search-container${
          isOpen && data?.products?.length > 0 ? " show" : ""
        }`}
        ref={searchConRef}
      >
        <AiOutlineSearch className="search-icon" />
        <div className="search-input-container">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onFocus={() => setIsOpen(!isOpen)}
            placeholder="Search for Products, Brands and More"
            className="search-input"
          />
        </div>
        {isOpen && data?.products?.length > 0 && (
          <ul className="search-result-container show">
            {data?.products.map((r, i) => (
              <li key={r.id}>
                <a className="search-result-list">
                  <div className="thumbnail">
                    <img src={r.thumbnail} alt={r.thumbnail} />
                  </div>

                  <div className="result-txt">
                    {/* <span className="typed-txt">{input}</span> */}
                    {r.title}
                    <div className="highlighted-txt">{r.category}</div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Searchbar;
