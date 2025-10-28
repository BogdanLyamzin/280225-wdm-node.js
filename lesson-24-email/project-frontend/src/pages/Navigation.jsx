import { Routes, Route } from "react-router-dom";

import PublicRoute from "../shared/components/PublicRoute/PublicRoute";
import PrivateRoute from "../shared/components/PrivateRoute/PrivateRoute";

import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import ContactsPage from "./ContactsPage/ContactsPage";

const Navigation = () => {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
