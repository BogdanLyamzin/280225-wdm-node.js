import axios from "axios";

const {VITE_USERS_API: baseURL} = import.meta.env;

const usersInstance = axios.create({
    baseURL,
});

export const fetchUsers = async()=> {
    const {data} = await usersInstance.get("/");
    return data;
}

export const adduser = async payload => {
    const {data} = await usersInstance.post("/", payload);
    return data;
}