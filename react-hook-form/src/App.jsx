import { FormProvider, useForm } from "react-hook-form";
import "./App.css";

import { contactSchema, generalInfoSchema } from "./utils/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import StepTracker from "./component/StepTracker";
import StepGeneralInfo from "./component/StepGeneralInfo";
import StepContacts from "./component/StepContacts";
import { useState } from "react";

const steps = ["General Info", "Contacts"];
const schemas = [generalInfoSchema, contactSchema];

function App() {
  const [step, setStep] = useState(0);

  const methods = useForm({
    resolver: yupResolver(schemas[step]),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      country: "",
      gender: "",
      password: "",
      confirmPassword: "",
      phones: [{ phoneNumber: "" }],
    },
  });

  const { handleSubmit, trigger } = methods;

  const onNext = async () => {
    const valid = await trigger();
    if (!valid) return;
    setStep((prev) => prev + 1);
  };

  const onPrevious = () => setStep((prev) => prev - 1);

  const onSubmit = (data) => {
    console.log("FINAL FORM SUBMISSION:", data);
    alert("Form submitted!");
  };

  return (
    <div className="main-container">
      <h1>Multi Step Form</h1>
      <StepTracker currentStep={step} steps={steps} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          {step === 0 && <StepGeneralInfo />}
          {step === 1 && <StepContacts />}

          <div className="form-navigation">
            {step > 0 && (
              <button type="button" onClick={onPrevious}>
                Previous
              </button>
            )}
            {step < steps.length - 1 && (
              <button type="button" onClick={onNext}>
                Next
              </button>
            )}
            {step === steps.length - 1 && (
              <button type="submit" className="submit-button">
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default App;
