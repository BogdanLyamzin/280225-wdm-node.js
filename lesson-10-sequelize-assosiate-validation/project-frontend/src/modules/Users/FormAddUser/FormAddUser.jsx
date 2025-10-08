import { useForm } from "react-hook-form";

const FormAddUser = ({addUser}) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    addUser(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} type="text" placeholder="Name" required />
      <input {...register("email")} type="email" placeholder="Email" required />
      <button type="submit">Add user</button>
    </form>
  );
};

export default FormAddUser;
