import { useState } from 'react'
function App() {
  const [textVal, setTextVal] = useState("")

  return (
    <>
     <h1>Controlled  Component</h1>

     <input placeholder='Enter Text' value={textVal} onChange={(e)=> setTextVal(e.target.value)}/>

     <h3>{textVal}</h3>
    </>
  )
}

export default App
