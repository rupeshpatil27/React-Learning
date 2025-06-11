import WelcomePage from "./Component/WelcomePage";
import './App.css'

function App() {
  
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-full w-full p-[20] bg-neutral-300 flex flex-col items-center justify-center gap-6'>

        <h1 className='text-4xl font-extrabold'>Context api</h1>


        <div className='flex items-center justify-center gap-5'>
          <WelcomePage/>
        </div>
      </div>
    </div>
  )
}

export default App
