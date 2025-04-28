import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';


function App() {

  return (
    <>

      <div className="main-container">
        <div className="container">
          <div className="form">
            <div className="input-group single-column">
              <TextField id="outlined-basic" label="Last Name" variant="filled" size="small" />
              <TextField id="outlined-basic" label="Last Name" variant="filled" size="small" />
            </div>
            <div className="input-group double-column">
              <TextField id="outlined-basic" label="Address line 1" variant="filled" size="small" />
            </div>
            <div className="input-group single-column">
              <TextField id="outlined-basic" label="City" variant="filled" size="small" />
              <TextField id="outlined-basic" label="State" variant="filled" size="small" />
            </div>
            <div className="input-group single-column">
              <TextField id="outlined-basic" label="Zip / Postal code" variant="filled" size="small" />
              <TextField id="outlined-basic" label="Country" variant="filled" size="small" />
            </div>

            <Button variant="contained" size="medium" style={{marginTop:20}}>
              Medium
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
