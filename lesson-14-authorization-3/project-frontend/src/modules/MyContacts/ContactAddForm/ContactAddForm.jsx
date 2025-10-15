import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from "@mui/material/Button";

// import loginSchema from "./loginSchema";

const ContactAddForm = ({ submitForm, loading }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(loginSchema),
  });

  const onSubmit = (values) => {
    submitForm(values);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={errors.email}
        helperText={errors.email?.message}
        {...register("fullname")}
        label="Fullname"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <TextField
        error={errors.password}
        helperText={errors.password?.message}
        {...register("phone")}
        label="Phone"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <TextField
        error={errors.password}
        helperText={errors.password?.message}
        {...register("email")}
        label="Email"
        variant="filled"
        fullWidth
        sx={{ marginBottom: "15px" }}
      />
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          value={1}
          {...register("categoryId")}
        >
          <MenuItem value={1}>Work</MenuItem>
        </Select>
      <Button
        loading={loading}
        type="submit"
        fullWidth
        variant="contained"
        loadingPosition="start"
      >
        Add contact
      </Button>
    </form>
  );
};

export default ContactAddForm;
