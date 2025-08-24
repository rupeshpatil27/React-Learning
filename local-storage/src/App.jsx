import { useState, useEffect } from 'react';

function App() {

  const [data, setData]= useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(storedData);
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem('data', data);
    }
  }, [data]);

  return (
    <div className='h-screen w-full flex items-center justify-center gap-2 p-10'>
      <div className='h-full w-full p-[15] rounded-2xl'>

        <h1 className='text-4xl font-extrabold text-center my-5'>LocalStorage</h1>

        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Enter your name
        </h2>
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <p className="mt-4 text-lg text-gray-700">
          Hello, <span className="font-semibold">{data || 'stranger'}</span>!
        </p>

      </div>
    </div>
  )
}

export default App
