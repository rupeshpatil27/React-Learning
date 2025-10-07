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

        <div>
          <label>Phone Numbers</label>
          <span style={{color:"red"}}>{errors.phones?.message}</span>
          {fields.map((item, index) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
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
              <button
                type="button"
                onClick={() => remove(index)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ phoneNumber: "" })}
            style={{ marginTop: "10px" }}
          >
            Add Phone Number
          </button>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
