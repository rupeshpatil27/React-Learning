import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./features/blog/blogSlice";
import Blog from "./components/Blog";
import { FiPlus } from "react-icons/fi";
import CreateBlog from "./components/CreateBlog";

function App() {
  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const filteredBlogs = blogs.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className="h-full w-full">
      <h1 className="text-4xl font-extrabold text-center">Blogs</h1>

      <div className="w-full px-5 py-2 mt-5">
        <div className="flex justify-center items-center gap-5">
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-2 py-2 bg-neutral-300 w-[20rem] rounded-md"
          />
          <FiPlus onClick={() => setShowAddForm(!showAddForm)} className="size-10 bg-cyan-400 text-4xl text-white rounded-full hover:bg-cyan-600 cursor-pointer" />
        </div>
      </div>

      {showAddForm && (
        <div className="flex justify-center mt-5">
          <CreateBlog onClose={() => setShowAddForm(false)} />
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-8 md:auto-rows-[12rem] mt-12 px-4 py-4">
        {filteredBlogs?.length > 0 ? (
          filteredBlogs.map((item, index) => (
            <Blog key={item.id || index} data={item} />
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">No blogs found.</p>
        )}
      </div>
    </div>

  );
}

export default App;
