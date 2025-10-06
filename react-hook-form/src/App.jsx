import { Controller, useForm } from "react-hook-form";
import "./App.css";
import FloatingInput from "./component/FloatingInput";
import FloatingSelect from "./component/FloatingSelect";

const isEmailAvailable = async (email) => {
  const takenEmails = ["admin@example.com", "test@example.com"];
  await new Promise((resolve) => setTimeout(resolve, 500));
  return !takenEmails.includes(email);
};

function App() {

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
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
        <Controller
          name="name"
          control={control}
          rules={{
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
          }}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Name"
              type="text"
              error={errors.name?.message}
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
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
          }}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Email id"
              type="text"
              error={errors.email?.message}
              required
            />
          )}
        />

        <Controller
          name="country"
          control={control}
          rules={{ required: "Country is required" }}
          render={({ field, fieldState }) => (
            <FloatingSelect
              {...field}
              label="Choose Country"
              value={field.value}
              onChange={field.onChange}
              options={[
                { label: "India", value: "IN" },
                { label: "USA", value: "US" },
                { label: "UK", value: "UK" },
              ]}
              error={fieldState?.error?.message}
            />
          )}
        />

        <Controller
          name="gender"
          control={control}
          rules={{ required: "required" }}
          render={({ field, fieldState }) => (
            <FloatingSelect
              {...field}
              label="Choose an option"
              value={field.value}
              onChange={field.onChange}
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
              error={fieldState?.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Password"
              type="password"
              error={errors.password?.message}
              required
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value, formValues) =>
              value === formValues.password || "Passwords do not match",
          }}
          render={({ field }) => (
            <FloatingInput
              {...field}
              label="Confirm Password"
              type="password"
              error={errors.confirmPassword?.message}
              required
            />
          )}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
