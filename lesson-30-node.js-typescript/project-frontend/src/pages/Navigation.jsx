import { Routes, Route } from "react-router-dom";

import PublicRoute from "../shared/components/PublicRoute/PublicRoute";
import PrivateRoute from "../shared/components/PrivateRoute/PrivateRoute";

import RegisterPage from "./RegisterPage/RegisterPage";
import VerifyEmailPage from "./VerifyEmailPage/VerifyEmailPage";
import LoginPage from "./LoginPage/LoginPage";
import RestPasswordPage from "./RestPasswordPage/RestPasswordPage";
import ContactsPage from "./ContactsPage/ContactsPage";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/reset-password" element={<RestPasswordPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify" element={<VerifyEmailPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
