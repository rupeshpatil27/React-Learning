import { useForm } from "react-hook-form"
import './App.css';
import { useState } from "react";

function App() {

  let text="";

    const { register, handleSubmit,getValues } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="main-container">
      <input {...register("firstName")}  className="input"/><br/>
      <input {...register("lastName")}  className="input"/><br/>
      <input type="submit" value="Submit" className="input-btn"/><br/>
    </form>
</>
  )
}

export default App
