import { useForm } from "react-hook-form";
import "./App.css";
import FloatingInput from "./component/FloatingInput";

const isEmailAvailable = async (email) => {
  const takenEmails = ["admin@example.com", "test@example.com"];
  await new Promise((resolve) => setTimeout(resolve, 500));
  return !takenEmails.includes(email);
};

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="main-container">
      <h1>Contact</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control"
        noValidate
      >
        <FloatingInput
          label="Name"
          name="userName"
          placeholder="Your name"
          {...register("userName", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
            maxLength: { value: 30, message: "Max 30 chars" },
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only letters and spaces",
            },
          })}
          error={errors.userName?.message}
        />

        <FloatingInput
          label="Email"
          name="email"
          type="email"
          placeholder="example@xyz.com"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            validate: {
              isAvailable: async (value) =>
                (await isEmailAvailable(value)) || "Email is already taken",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />

        <FloatingInput
          label="Password"
          name="password"
          type="password"
          placeholder="Your password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />

        <FloatingInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          })}
          error={errors.confirmPassword?.message}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
