import { useRef, useState } from 'react'
import UserInput from './component/userInput'

function App() {
  const inputRef = useRef(null)

  const changeBackground = () => {
    inputRef.current.style.backgroundColor = "red";
  }
 
  const inputFocus = () => {
    inputRef.current.focus()
  }


  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[60%] w-[60%] p-[15] bg-gray-200 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>forward Ref</h1>

        <UserInput className="px-10 py-4 bg-blue-200 rounded-3xl" placeholder="Enter Value" ref={inputRef} />

        <div className='flex items-center justify-center gap-5 mt-3'>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={changeBackground}>change background</button>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={inputFocus}>Focus</button>
        </div>

      </div>
    </div>
  )
}

export default App
