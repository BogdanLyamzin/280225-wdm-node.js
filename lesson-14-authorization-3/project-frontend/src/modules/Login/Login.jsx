import {useSelector, useDispatch} from "react-redux";
import { Navigate, Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Error from "../../shared/components/Error/Error";

import LoginForm from "./LoginForm/LoginForm";

import useLogin from "../../shared/hooks/useLogin";

import { selectAuth } from "../../redux/auth/auth-selectors";
import { login } from "../../redux/auth/auth-thunks";

const Login = () => {
  const {loading, error} = useSelector(selectAuth);
  const dispatch = useDispatch();

  const isLogin = useLogin();
  if(isLogin) return <Navigate to="/contacts" />

  const submitForm = (payload) => dispatch(login(payload));

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
        Please login to get access to your contacts
      </Typography>
      <LoginForm submitForm={submitForm} loading={loading} />
      {error && <Error>{error}</Error>}
      <Typography variant="h6" textAlign="center" gutterBottom>
        Don't have account? <Link to="/register">Register</Link>
      </Typography>
    </Paper>
  );
};

export default Login;
