import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  const getData = () => {
    const [data, loading, error] = customReactQuery('https://dummyjson.com/users')
  }

  return (
    <div className="main-container" style={{ overflowX: "auto" }}>
      <button onClick={getData}>show user</button>
      <h1>axios</h1>
      {users.map((item, index) => (
        <h3>{item.firstName}</h3>
      ))}
    </div>
  )
}

export default App


const customReactQuery = (urlPath) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        setError(false)
        const response = await axios.get(urlPath);
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    })()

    // return () => {
    //   second
    // }
  }, [])

  return [data, loading, error]

}
