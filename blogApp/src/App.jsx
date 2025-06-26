import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./features/blog/blogSlice";
import Blog from "./components/Blog";
import { FiPlus } from "react-icons/fi";

function App() {

  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className='h-full w-full'>
      <h1 className='text-4xl font-extrabold text-center'>Blogs</h1>

      <div className="w-full px-5 py-2 mt-5">
        <div className="flex justify-center items-center gap-5">
          <input placeholder="Search..." className="px-2 py-2 bg-neutral-300 w-[20rem] rounded-md"/>
          <FiPlus className="size-10 bg-cyan-400 text-4xl text-white rounded-full hover:bg-cyan-600 cursor-pointer"/>
        </div>
      </div>

      <div className="w-full h-full flex justify-center items-center flex-col gap-3 mt-15">

        <div className="p-6">
          <div className="w-full flex items-stretch justify-center flex-wrap gap-5">
            {blogs.posts && blogs.posts.map((item, index) => (
              <Blog data={item} />
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App
