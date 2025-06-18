function App() {

  return (
    <div className='h-full w-full'>
      <h1 className='text-4xl font-extrabold text-center text-white'>Todo</h1>

      <div className="w-full h-full flex justify-center items-center gap-3 mt-15">
        <input type="text" placeholder="Enter Todo" className="min-w-[25rem] bg-[#282732] h-10 px-2 py-2 outline-0 focus:border-[1px] focus:border-white rounded-md font-semibold text-white" />

        <button className="bg-[#282732] text-lg font-bold py-2 px-10 rounded-sm text-white cursor-pointer">
          Add
        </button>
      </div>

      <div className="w-full h-full flex justify-center items-center flex-col gap-3 mt-15">

        <div className="py-4 px-5 text-[16px] font-semibold bg-gradient-to-b from-[#282b4b] to-[#1f1e39] flex items-start justify-start w-1/2 rounded-lg">
          <p className="text-[#d9ecff] font-semibold text-lg mr-2.5">1.</p>
          <p className="text-[#d9ecff] font-semibold text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
      </div>
    </div>
  )
}

export default App
