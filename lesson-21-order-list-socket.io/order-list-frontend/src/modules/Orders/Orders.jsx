import { useState, useEffect } from "react";
import io from "socket.io-client";

import * as ordersApi from "../../shared/api/orders-api";

const socket = io.connect(import.meta.env.VITE_WEBSOCKET_URL);

const Orders = () => {
  const [items, setItems] = useState([]);

  useEffect(()=> {
    socket.on("add_order", data => {

    });
    socket.on("change_order", ()=> {
      
    })
  }, [])
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const data = await ordersApi.fetchOrders();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getOrders();
  }, []);

  if (!items.length) return null;

  const elements = items.map(({ _id, status, description }) => (
      <tr key={_id}>
        <td>{_id}</td>
        <td>{status}</td>
        <td>{description}</td>
      </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {elements}
      </tbody>
    </table>
  );
};

export default Orders;
