import * as Yup from "yup";

const checkEmailAvailability = async (email) => {
  const takenEmails = ["admin@example.com", "test@example.com"];
  await new Promise((resolve) => setTimeout(resolve, 500));
  return !takenEmails.includes(email);
};

export const generalInfoSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(30, "Max 30 characters")
    .matches(/^[A-Za-z\s]+$/, "Only letters and spaces"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .test("emailAvailable", "Email is already taken", async (value) => {
      const isAvailable = await checkEmailAvailability(value);
      return isAvailable;
    }),

  country: Yup.string().required("Please select Country"),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),

  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),

});


export const contactSchema = Yup.object().shape({
  phones: Yup.array()
    .of(
      Yup.object().shape({
        phoneNumber: Yup.string()
          .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
          .required("Phone number is required"),
      })
    )
    .min(1, "At least one phone number is required"),
});