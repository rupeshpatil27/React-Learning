import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [triggerCount, setTriggerCount] = useState(0)
  const [pressedCount, setPressedCount] = useState(0)

  function startCount() {
    setPressedCount((count) => count + 1)

    DebounceCount()
  }

  const myDebounce= (cb, d) =>{
    let timer;

    return function (...args) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        console.log(timer)
        cb(...args)
      }, d)
    }
  }

  const DebounceCount = myDebounce(() => { setTriggerCount((count) => count + 1) }, 1000)

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[60%] w-[60%] p-[15] bg-gray-200 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>Debouncing</h1>

        <button className='px-10 py-4 bg-blue-500 rounded-3xl' onClick={startCount}>Trigger</button>

        <div className='flex items-center justify-center gap-5'>
          <span className='text-2xl font-normal'>Pressed</span> : <span>{pressedCount}</span>
          <span className='text-2xl font-normal'> Trigger</span> : <span>{triggerCount}</span>
        </div>

      </div>
    </div>
  )
}

export default App
