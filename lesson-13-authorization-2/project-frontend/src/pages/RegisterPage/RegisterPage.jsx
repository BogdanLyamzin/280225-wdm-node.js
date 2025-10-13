import Stack from "@mui/material/Stack";

import Register from "../../modules/Register/Register";

const RegisterPage = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Register />
    </Stack>
  );
};

export default RegisterPage;