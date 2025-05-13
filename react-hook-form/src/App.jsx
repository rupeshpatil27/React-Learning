import { useForm } from "react-hook-form"
import './App.css';
import { useState } from "react";

function App() {

  let text = "";

  const { register, handleSubmit, getValues, formState: { errors } } = useForm({
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
        <input {...register("firstName", { required: true, maxLength: 30 })} placeholder="Enter Name" className="input" /><br />

        {errors.firstName && errors.firstName.type === "required" && (
          <span role="alert" className="error-message">This is required</span>
        )}

        {errors.firstName && errors.firstName.type === "maxLength" && (
          <span role="alert" className="error-message">Max length exceeded</span>
        )}

        <input {...register("lastName",{ required: true})} placeholder="Enter Mobile" className="input" /><br />

         {errors.lastName && errors.lastName.type === "required" && (
          <span role="alert" className="error-message">This is required</span>
        )}

        <input type="submit" value="Submit" className="input-btn" /><br />
      </form>
    </>
  )
}

export default App
