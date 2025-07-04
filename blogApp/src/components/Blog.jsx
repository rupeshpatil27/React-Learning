import BlogCard from "./BlogCard";
import { FiPlus } from "react-icons/fi";
import CreateBlog from "./CreateBlog";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";

const Blog = () => {
  const { blogs } = useSelector((state) => state.blog);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <div className="h-full w-full relative">
      <h1 className="text-4xl font-extrabold text-center">Blogs</h1>

      <div className="w-full px-5 py-2 mt-5">
        <div className="flex justify-center items-center gap-5">
          {/* <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-2 bg-neutral-300 w-[20rem] rounded-md"
          /> */}

          <div
            className="px-4 py-2 bg-neutral-300 w-[20rem] rounded-md cursor-pointer"
            onClick={() => setShowSearchBox(true)}
          >
            <p className="text-sm md:text-lg text-neutral-500 font-semibold">
              Search..
            </p>
          </div>
          <FiPlus
            onClick={() => setShowAddForm(!showAddForm)}
            className="size-10 bg-cyan-400 text-4xl text-white rounded-full hover:bg-cyan-600 cursor-pointer"
          />
        </div>
      </div>

      {showAddForm && (
        <div className="flex justify-center mt-5">
          <CreateBlog onClose={() => setShowAddForm(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:auto-rows-[12rem] mt-12 px-4 py-4">
        {blogs?.length > 0 ? (
          blogs.map((item, index) => (
            <BlogCard key={item.id || index} data={item} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No blogs found.</p>
        )}
      </div>

      {showSearchBox && (
        <SearchBox
          onClose={() => setShowSearchBox(false)}
        />
      )}
    </div>
  );
};

export default Blog;
