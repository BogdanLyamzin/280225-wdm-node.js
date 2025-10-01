import { QueryTypes } from "sequelize";

import sequelize from "../db/sequelize.js";

export const getUsers = async ()=> {
    const query = `SELECT * FROM users`;
    const data = await sequelize.query(
        query,
        {
            type: QueryTypes.SELECT,
        }
    );

    return data;
}

export const addUser = async ({name, email}) => {
    const  query = `INSERT INTO users (name, email) VALUES('${name}', '${email}') RETURNING *`;
    const data = await sequelize.query(
        query,
        {
            type: QueryTypes.INSERT
        }
    );
    return data[0];
}