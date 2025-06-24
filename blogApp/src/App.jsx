import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./features/blog/blogSlice";
import Blog from "./components/Blog";

function App() {

  const { blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className='h-full w-full'>
      <h1 className='text-4xl font-extrabold text-center'>Blogs</h1>

      <div className="w-full h-full flex justify-center items-center flex-col gap-3 mt-15">


        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
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
