import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)


  function startCount() {
    setCount((cn) => cn + 1)
  }

  function expensiveExp(num) {
    for (var i = 0; i < 1000000000; i++) { }
    return num * 2
  }


  const doubleValue = useMemo(() => expensiveExp(input), [input])


  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[60%] w-[60%] p-[15] bg-gray-200 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>useMemo</h1>


        <div className='flex items-center justify-center gap-5'>
          {/* <span className='text-2xl font-normal'>Pressed</span> : <span>{pressedCount}</span> */}
          <span className='text-2xl font-normal'> Normal Count</span> : <span>{count}</span>
          <span className='text-2xl font-normal'>double</span> : <span>{doubleValue}  (Expensive Expresion run using UseMeme hook)</span>
        </div>

        <input type='number' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter number' className='bg-amber-200 px-10 py-4' />
        <button className='px-10 py-4 bg-blue-500 rounded-3xl' onClick={startCount}>Trigger</button>
      </div>
    </div>
  )
}

export default App
