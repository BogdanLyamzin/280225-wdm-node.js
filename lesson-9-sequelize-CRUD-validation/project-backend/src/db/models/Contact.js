import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Contact = sequelize.define(
    "contact",
    {
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }
);

// Contact.sync({alter: true});

export default Contact;