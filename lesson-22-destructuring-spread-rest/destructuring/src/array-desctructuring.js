const fio = "Liamzin Bohdan Dmitrievitch";
// const [lastName, name, middleName] = fio.split(" "); // "Liamzin", "Bohdan", "Dmitrievitch"
// const fioArr = fio.split(" ");
// const lastName = fioArr[0];
// const name = fioArr[1];
// const middleName = fioArr[2];
// console.log(lastName, name, middleName)
// const [name] = fio.split(" ");
// console.log(name)
// const [lastName, , middleName] = fio.split(" ");
// console.log(lastName, middleName)
const [lastName, ...other] = fio.split(" "); // "Liamzin", ..."Bohdan", "Dmitrievitch"
console.log(lastName);
console.log(other);
