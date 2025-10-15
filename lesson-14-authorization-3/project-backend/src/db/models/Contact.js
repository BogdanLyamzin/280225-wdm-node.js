import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

import { phone, email } from "../../constants/validation.js";

const Contact = sequelize.define("contact", {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: {
        args: phone.value,
        msg: phone.message,
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        is: {
            args: email.value,
            msg: email.message,
        }
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "categories",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL"
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users",
      key: "id"
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
  }
});

// Contact.sync({force: true});

export default Contact;
