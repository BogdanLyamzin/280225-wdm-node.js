import axios from "axios";

const {VITE_API_URL: baseURL} = import.meta.env;

const ordersInstance = axios.create({
    baseURL: `${baseURL}/orders`
});

export const fetchOrders = async()=> {
    const {data} = await ordersInstance.get("/");
    return data;
}