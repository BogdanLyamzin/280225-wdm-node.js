import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: process.env.DATABASE_DIALECT,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    dialectOptions: {
        ssl: process.env.DATABASE_DIALECT_OPTIONS_SSL === "true",
    }
});

export default sequelize;