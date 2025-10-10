import { TypeError } from "./errorClasses.js";
import { isLeapYear } from "./dateFunctions.js";

const errorWithDetails = new TypeError("Type error", "Argument must be only number");
console.log(errorWithDetails.message);
console.log(errorWithDetails.detailsMessage);

// const isLeapYear = year => {
//     if(year === undefined) {
//         throw new Error("Year required argument");
//     }
//     if(typeof year !== "number") {
//         throw new Error("Year must be number");
//     }
//     if(Number.isNaN(year)) {
//         throw new Error("Year cannot be NaN");
//     }
//     if(!Number.isFinite(year)) {
//         throw new Error("Year cannot be Infinity");
//     }

//     const date = new Date(year, 2, 0);
//     return 29 === date.getDate();
//     // try {
//     //     if(typeof year !== "number") {
//     //         throw new Error("Year must be number");
//     //     }
//     //     const date = new Date(year, 2, 0);
//     //     return 29 === date.getDate();
//     // }
//     // catch(error) {
//     //     console.log("Cannot calc is year leap")
//     // }
// }

// console.log(isLeapYear(2025));
// console.log(isLeapYear(2020));
const yearFromBackend = {year: 2004};
// console.log(isLeapYear(yearFromBackend)); //throw new Error("Year must be number")
// console.log(isLeapYear(NaN)); //throw new Error("Year cannot be NaN")
// console.log(isLeapYear(1 / 0)); //throw new Error("Year must be number")
// console.log(isLeapYear());

// const error = new Error("Some error");
// console.log(error);
// throw error; // выброс ошибки
// const user = "Bohdan Liamzin";
// console.log(user);

// const fetchUsers = async () => {
//   return null;
//   return [
//     {
//       id: 1,
//       name: "Bohdan",
//       sallary: 3000,
//     },
//     {
//       id: 2,
//       name: "Nastya",
//       sallary: 2500,
//     },
//   ];
// };

// const users = await fetchUsers();
// try {
//   const sallarySum = users.reduce((acum, { sallary }) => acum + sallary, 0); // throw new Error("Cannot read properties of null (reading 'reduce')")
//   console.log(sallarySum);
// } catch (error) {
//     console.log(`Cannot calc users sallary ${error.message}`);
// }

// const station = {
//   name: "Gas station",
// };
// console.log(station);
// let sallarySum = 0;
// for(let i = 0; i < users.length; i += 1) {
//     console.log(users[i])
// }
// for(const user of users) {
//     sallarySum += user.sallary;
// }
// for(const {sallary} of users) {
//     sallarySum += sallary;
// }
// users.forEach(({sallary})=> sallarySum += sallary);
// console.log(sallarySum)
