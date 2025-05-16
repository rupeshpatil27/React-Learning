import { useEffect, useState } from 'react'
import './App.css'
import {
  useQuery
} from '@tanstack/react-query'
import { fetchData } from './api/user'

function App() {

  // const [users, setUsers] = useState([])
  // function showData() {
  const { data } = useQuery({ queryKey: ['users'], queryFn: fetchData })
  // setUsers(data)
  console.log(data)
  // }
  // })

  return (
    <div className="main-container" style={{ overflowX: "auto" }}>
      <h1>React Query</h1>
      {/* <button onClick={showData}>show user</button> */}
      {/* {data?.users.map((item, index) => (
        <h3>{item.firstName}</h3>
      ))} */}
    </div>
  )
}

export default App
