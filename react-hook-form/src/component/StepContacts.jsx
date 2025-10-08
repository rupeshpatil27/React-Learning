import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import FloatingInput from "./FloatingInput";

const StepContacts = () => {
  const { control, formState: { errors } } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  return (
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 13H5c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            </button>
          )}

          {index === fields.length - 1 && (
            <button type="button" onClick={() => append({ phoneNumber: "" })}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M19 11H13V5C13 4.45 12.55 4 12 4S11 4.45 11 5v6H5c-.55 0-1 .45-1 1s.45 1 1 1h6v6c0 .55.45 1 1 1s1-.45 1-1v-6h6c.55 0 1-.45 1-1s-.45-1-1-1z" />
              </svg>
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepContacts;
