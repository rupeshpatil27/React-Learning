import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./features/blog/blogSlice";

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

        {blogs.posts && blogs.posts.map((item, index) => (
          <p key={index}>{item.title}</p>
        ))}
      </div>
    </div>
  )
}

export default App
