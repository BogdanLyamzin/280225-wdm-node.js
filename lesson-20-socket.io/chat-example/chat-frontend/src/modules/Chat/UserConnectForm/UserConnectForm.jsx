import { useForm } from "react-hook-form";

import FormFieldError from "../../../shared/components/FormFieldError/FormFieldError";

const UserConnectForm = ({submitForm}) => {
  const {handleSubmit, register, reset, formState: {errors}} = useForm();

  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input type="text" placeholder="Username" {...register("username", {required: "Username required"})} />
      {errors.username && <FormFieldError>{errors.username.message}</FormFieldError>}
      <button type="submit">Start chat</button>
    </form>
  );
};

export default UserConnectForm;
