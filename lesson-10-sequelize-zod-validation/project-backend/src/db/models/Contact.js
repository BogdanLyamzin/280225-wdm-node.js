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
    unique: {
      args: true,
      msg: "Phone number already exist",
    },
    validate: {
      // is: phone.value,
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
});

// Contact.sync({force: true});

export default Contact;
