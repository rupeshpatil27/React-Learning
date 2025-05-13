import { useForm } from "react-hook-form"
import './App.css';
import { useState } from "react";

function App() {

  const [Val, setVal] = useState("")

  const { register, handleSubmit, getValues,setValue, formState: { errors } } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  })

  const onSubmit = (data) => {
    const { firstName } = data;

    setValue("firstName", "update value using setValue()")

    setVal(JSON.stringify(data))
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

        <input {...register("lastName", { required: true })} placeholder="Enter Mobile" className="input" /><br />

        {errors.lastName && errors.lastName.type === "required" && (
          <span role="alert" className="error-message">This is required</span>
        )}

        <input type="submit" value="Submit" className="input-btn" /><br />

        {Val &&
          <span className="output-txt">{Val}</span>}

      </form>
    </>
  )
}

export default App
