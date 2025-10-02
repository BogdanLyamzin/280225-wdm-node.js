import { getUsers, addUser } from "../services/users.service.js";

export const getUsersController = async(req, res)=> {
    const result = await getUsers();
    res.json(result);
}

export const addUserController = async(req, res)=> {
    const result = await addUser(req.body);
    res.status(201).json(result);
}