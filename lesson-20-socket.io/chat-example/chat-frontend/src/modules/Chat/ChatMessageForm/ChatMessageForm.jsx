import { useForm } from "react-hook-form";

import FormFieldError from "../../../shared/components/FormFieldError/FormFieldError";

const ChatMessageForm = ({submitForm}) => {
  const {handleSubmit, register, reset, formState: {errors}} = useForm();

  const onSubmit = values => {
    submitForm(values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="message">Message:</label>
      <input type="text" placeholder="Message" {...register("message", {required: "Message required"})} />
      {errors.message && <FormFieldError>{errors.message.message}</FormFieldError>}
      <button type="submit">Send message</button>
    </form>
  );
};

export default ChatMessageForm;
