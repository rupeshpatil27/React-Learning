import { Counter } from "./component/Counter"

function App() {

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-full w-full p-[20] bg-neutral-300 flex flex-col items-center gap-6'>

        <h1 className='text-4xl font-extrabold'>Redux</h1>


        <div className='flex items-center justify-center gap-5'>
          <Counter />
        </div>
      </div>
    </div>
  )
}

export default App
