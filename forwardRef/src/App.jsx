import { useRef, useState } from 'react'
import UserInput from './component/userInput'
import UserInput1 from './component/userInput1'

function App() {
  const inputRef = useRef(null)
  const inputRef2 = useRef(null)

  const changeBackground = () => {
    inputRef.current.style.backgroundColor = "red";
  }

  const inputFocus = () => {
    inputRef.current.focus()
  }
  
  const changeBackground2 = () => {
    inputRef2.current.style.backgroundColor = "red";
  }

  const changeBorderColor = () => {
    inputRef2.current.style.borderWidth = "2px";
    inputRef2.current.style.borderColor = "blue";
  }


  return (
    <div className='h-screen w-full flex items-center justify-center gap-2'>
      <div className='h-[60%] w-[60%] p-[15] bg-gray-200 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>forward Ref (before react 19)</h1>

        <UserInput className="px-10 py-4 bg-blue-200 rounded-3xl" placeholder="Enter Value" ref={inputRef} />

        <div className='flex items-center justify-center gap-5 mt-3'>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={changeBackground}>change background</button>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={inputFocus}>Focus</button>
        </div>

      </div>
     
      <div className='h-[60%] w-[60%] p-[15] bg-gray-200 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>forward Ref (react 19+)</h1>

        <UserInput1 className="px-10 py-4 bg-blue-200 rounded-3xl border-2 border-amber-300" placeholder="Enter Value" ref={inputRef2}  />

        <div className='flex items-center justify-center gap-5 mt-3'>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={changeBackground2}>change background</button>
          <button className="px-7 py-2 bg-blue-500 rounded-lg text-white font-semibold" onClick={changeBorderColor}>change border color</button>
        </div>

      </div>
    </div>
  )
}

export default App
