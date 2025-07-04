import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./features/blog/blogSlice";
import Blog from "./components/Blog";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <>
      <Blog />
    </>

  );
}

export default App;
