import axios from "axios";

const authInstance = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/auth`
});

export const registerUserApi = async payload => {
    const {data} = await authInstance.post("/register", payload);
    return data;
}

export const loginUserApi = async payload => {
    const {data} = await authInstance.post("/login", payload);
    // authInstance.defaults.headers["Authorization"] = `Bearer ${data.token}`;
    return data;
}

export const getCurrentApi = async token => {
    const {data} = await authInstance.get("/current", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data;
}

export const logoutUserApi = async()=> {
    const {data} = await authInstance.post("/logout");
    delete authInstance.defaults.headers["Authorization"];
    return data;
}