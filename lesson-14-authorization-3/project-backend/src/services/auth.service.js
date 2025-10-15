import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import HttpError from "../utils/HttpError.js";

const {JWT_SECRET} = process.env;

export const findUser = query => User.findOne({
    where: query
});

export const register = async payload => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return User.create({...payload, password: hashPassword});
};

export const login = async ({email, password}) => {
    const user = await findUser({email});

    if(!user) throw HttpError(401, "Email or password invalid");

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) throw HttpError(401, "Email or password invalid");

    const token = jwt.sign({email}, JWT_SECRET, {expiresIn: "24h"});

    await user.update({token});
    
    return {
        token,
        user: {
            email: user.email,
            username: user.username,
        }
    };
}

export const refreshSession = user => {
    const {email, username} = user;
    const token = jwt.sign({email}, JWT_SECRET, {expiresIn: "24h"});
    return {
        token,
        user: {
            email,
            username,
        }
    };
}

export const logout = async ({email}) => {
    const user = await findUser({email});
    return user.update({token: null});
}