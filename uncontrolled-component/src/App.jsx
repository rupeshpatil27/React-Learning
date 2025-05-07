import { useState } from 'react'
import './App.css'

function App() {
  const [textval, setTextval] = useState("")

  function handleSubmit(e) {

    e.preventDefault()
const txt=document.getElementById("name").value
setTextval(txt)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Uncontrolled Components</h1>

        <input type='text' name='name' id='name' placeholder='Enter text' />
        <br />
        <br />

        {textval}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
