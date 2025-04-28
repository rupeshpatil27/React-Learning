import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import Search from '@mui/icons-material/Search';
import UserTable from './component/UserTable';

function App() {
  const [showData, SetShowData] = useState(false)

  const showTable = () => {
    SetShowData(true)
  }

  return (

    <div className="main-container">
      <Button variant="contained" className='btn-class' endIcon={<Search />} size="medium" onClick={showTable}>
        Serach
      </Button>

     {showData ? <UserTable/> : null}
    </div>

  )
}

export default App
