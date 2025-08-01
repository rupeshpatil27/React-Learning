import { useRef } from "react";
import CustomInput from "./component/CustomInput ";

function App() {

  const inputRef = useRef();

  const handleReset = () => {
    inputRef.current.reset();
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='h-[60%] w-[60%] bg-red-200 rounded-2xl flex flex-col items-center justify-start gap-2'>

        <h1 className='text-4xl font-extrabold mt-2'>useImperativeHandle</h1>

      <div className="mt-10">
          <CustomInput ref={inputRef} />
      </div>
        <div className="space-x-4">
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
