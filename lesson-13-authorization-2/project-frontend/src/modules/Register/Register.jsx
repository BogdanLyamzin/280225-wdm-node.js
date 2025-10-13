import {useSelector, useDispatch} from "react-redux";
import { Navigate, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Error from "../../shared/components/Error/Error";

import RegisterForm from "./RegisterForm/RegisterForm";

import useLogin from "../../shared/hooks/useLogin";

import { selectAuth } from "../../redux/auth/auth-selectors";
import { register } from "../../redux/auth/auth-thunks";

const Register = () => {
  const {loading, error} = useSelector(selectAuth);
  const isRegister = useSelector(store => store.auth.isRegister);
  const dispatch = useDispatch();

  const isLogin = useLogin();
  if(isLogin) return <Navigate to="/contacts" />;

  if(isRegister) return <Navigate to="/" />;

  const submitForm = (payload) => dispatch(register(payload));

  return (
    <Paper
      variant="outlined"
      sx={{
        width: "300px",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h5" textAlign="center" gutterBottom>
        Register if you want work with contacts
      </Typography>
      <RegisterForm submitForm={submitForm} loading={loading} />
      {error && <Error>{error}</Error>}
      <Typography variant="h6" textAlign="center" gutterBottom>
        Already have account? <Link to="/">Login</Link>
      </Typography>
    </Paper>
  );
};

export default Register;
