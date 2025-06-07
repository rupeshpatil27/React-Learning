
import { Link, Outlet } from "react-router";
import React from 'react'

const About = () => {
  return (
    <div className='flex w-full h-[60vh] justify-center bg-amber-300 gap-2 translate-y-20'>
      <Link to="/page1">Link 1</Link>
      <Link to="/page2">Link 2</Link>
      <Link to="/page3">Link 3</Link>

      <div className="mt-5 w-5xl h-28">
        <Outlet />
      </div>
    </div>
  )
}

export default About