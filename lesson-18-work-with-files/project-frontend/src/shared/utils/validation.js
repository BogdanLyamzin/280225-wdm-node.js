import * as Yup from "yup";

export const emailValidation = {
  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  message: "email mast contain @, dot and no contain spaces",
};

export const passwordValidation = {
  value: /^.{6,}$/,
  message:
    "Password must contains al least 6 symbol",
};

export const passwordSchema = Yup.string()
  .trim()
  .min(6)
  .matches(passwordValidation.value, passwordValidation.message)
  .required();

export const emailSchema = Yup.string()
  .trim()
  .matches(emailValidation.value, emailValidation.message)
  .required();
