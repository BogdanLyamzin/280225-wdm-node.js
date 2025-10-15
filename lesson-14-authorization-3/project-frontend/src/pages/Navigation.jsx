import {Routes, Route} from "react-router-dom";

import RegisterPage from "./RegisterPage/RegisterPage";
import LoginPage from "./LoginPage/LoginPage";
import ContactsPage from "./ContactsPage/ContactsPage";

const Navigation = ()=> {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
    )
}

export default Navigation;