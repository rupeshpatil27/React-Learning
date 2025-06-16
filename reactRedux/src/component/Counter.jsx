import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div className='flex items-center gap-3'>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}

          className='py-2 px-10 bg-cyan-600 text-white text-lg rounded-full'
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}

          className='py-2 px-10 bg-cyan-600 text-white text-lg rounded-full'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}