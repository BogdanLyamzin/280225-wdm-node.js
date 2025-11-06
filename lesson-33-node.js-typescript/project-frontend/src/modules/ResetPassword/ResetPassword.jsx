import { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Error from "../../shared/components/Error/Error";

import ResetPasswordForm from "./ResetPasswordForm/ResetPasswordForm";

import { resetPasswordApi } from "../../shared/api/auth-api";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const submitForm = async (payload) => {
    try {
      setError(null);
      setLoading(true);
      const {message} = await resetPasswordApi(payload);
      setMessage(message);
    }
    catch(error) {
      setError(error.response?.data?.message);
    }
    finally {
      setLoading(false);
    }
  };

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
        Enter email for reset password
      </Typography>
      {!message && <ResetPasswordForm submitForm={submitForm} loading={loading} />}
      {error && <Error>{error}</Error>}
      {message && <Typography variant="h6" textAlign="center" gutterBottom>
        {message}
      </Typography>}
    </Paper>
  );
};

export default ResetPassword;
