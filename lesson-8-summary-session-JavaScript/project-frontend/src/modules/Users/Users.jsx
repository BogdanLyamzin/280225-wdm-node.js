import { useState, useEffect } from "react";

import FormAddUser from "./FormAddUser/FormAddUser";
import UserList from "./UserList/UserList";

import * as usersApi from "../../shared/api/users-api";

import styles from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const addUser = async (payload)=> {
    try {
        const newUser = await usersApi.adduser(payload);
        setUsers(prevUsers => [...prevUsers, newUser]);
    }
    catch(error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await usersApi.fetchUsers();
        setUsers(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div>
        <FormAddUser addUser={addUser} />
      </div>
      <div>
        <UserList items={users} />
      </div>
    </div>
  );
};

export default Users;
