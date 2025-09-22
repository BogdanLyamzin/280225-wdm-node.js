const nodemon = require("nodemon");

const data = require("./users");
// console.log(data);
const {admins} = require("./users");
// console.log(admins);
// const getCurrentMonth = require("./dateFunctions/getCurrentMonth");
// const isLeapYear = require("./dateFunctions/isLeapYear");
const {getCurrentMonth, isLeapYear} = require("./dateFunctions");
