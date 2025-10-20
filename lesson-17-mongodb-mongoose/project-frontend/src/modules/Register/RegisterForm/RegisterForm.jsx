import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import registerSchema from "./registerSchema";

const RegisterForm = ({ submitForm, loading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <TextField
        error={errors.username}
        helperText={errors.username?.message}
        {...register("username")}
        label="Username"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <TextField
        error={errors.email}
        helperText={errors.email?.message}
        {...register("email")}
        label="email"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <TextField
        error={errors.password}
        helperText={errors.password?.message}
        {...register("password")}
        label="password"
        type="password"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <Button
        loading={loading}
        type="submit"
        fullWidth
        variant="contained"
        loadingPosition="start"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
