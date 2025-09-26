import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams } from "react-router";
import { autoSuggest } from "../api/product";
import { useQuery } from "@tanstack/react-query";

const Searchbar = () => {
  const [input, setInput] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", { q: input }],
    queryFn: autoSuggest,
  });

  return (
    <>
      <div className="search-container">
        <AiOutlineSearch className="search-icon" />
        <div className="search-box">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search...."
            className="search-input"
          />
        </div>

      </div>
      {data?.products.map((r, i) =>
        <span>{r.title}</span>
      )}

    </>
  );
};

export default Searchbar;
