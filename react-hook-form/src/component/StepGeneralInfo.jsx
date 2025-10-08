import { Controller, useFormContext } from "react-hook-form";
import FloatingInput from "./FloatingInput";
import FloatingSelect from "./FloatingSelect";

const StepGeneralInfo = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
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
        render={({ field }) => (
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
    </>
  );
};

export default StepGeneralInfo;
