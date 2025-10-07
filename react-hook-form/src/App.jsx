import { Controller, useFieldArray, useForm } from "react-hook-form";
import "./App.css";
import FloatingInput from "./component/FloatingInput";
import FloatingSelect from "./component/FloatingSelect";

import { validationSchema } from "./utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phones: [{ phoneNumber: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
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
          render={({ field, fieldState }) => (
            <FloatingSelect
              {...field}
              label="Country"
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
          render={({ field, fieldState }) => (
            <FloatingSelect
              {...field}
              label="Gender"
              value={field.value}
              onChange={field.onChange}
              options={[
                { label: "Male", value: "Male" },
                { label: "Female", value: "Female" },
              ]}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
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

        <div className="contact-con">
          <h2>Add Contacts:</h2>
          <span style={{ color: "red" }}>{errors.phones?.message}</span>

          {fields.map((item, index) => (
            <div key={item.id} className="phone-numbers-wrapper">
              <Controller
                name={`phones[${index}].phoneNumber`}
                control={control}
                render={({ field }) => (
                  <FloatingInput
                    {...field}
                    label={`Phone ${index + 1}`}
                    type="text"
                    error={errors.phones?.[index]?.phoneNumber?.message}
                    required
                  />
                )}
              />
              {fields.length > 1 && index !== fields.length - 1 && (
                <button type="button" onClick={() => remove(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M19 13H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z" />
                  </svg>
                </button>
              )}

              {index === fields.length - 1 && (
                <button
                  type="button"
                  onClick={() => append({ phoneNumber: "" })}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                  >
                    <path d="M19 11H13V5C13 4.45 12.55 4 12 4S11 4.45 11 5v6H5c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1z" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
