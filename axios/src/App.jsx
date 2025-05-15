import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  async function getData() {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      // console.log(users)
      
      console.log(response.data.users)
      setUsers(response.data.users)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="main-container" style={{overflowX:"auto"}}>
      <button onClick={getData}>show user</button>
      <h1>axios</h1>
      {users.map((item,index)=>(
        <h3>{item.firstName}</h3>
      ))}
    </div>
  )
}

export default App
