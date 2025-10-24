const user = {
    name: "Bohdan",
    lastName: "Liamzin",
    age: 38
};

// const userCopy = user;
// const userCopy = {};
// for(const key in user) {
//     userCopy[key] = user[key];
// }
// const userCopy = {...user}; // {name: "Bohdan", lastName: "Liamzin"}
// userCopy.name = "Bogdan";
// console.log(user);
// console.log(userCopy)
// const userWithDetails = {
//     age: 39,
//     country: "Germany"
// };
// for(const key in user) {
//     userWithDetails[key] = user[key];
// }
// console.log(userWithDetails)
// const userWithDetails = {...user, age: 39, country: "Germany"};
// console.log(userWithDetails)
// const newUser = {...user, age: 39}
// console.log(newUser)
const additionalInfo = {
    university: true,
    workExpirience: 16,
}
const scores = {
    history: 12,
    biology: 11
};

const userInfo = {...user, ...additionalInfo, scores: {...scores}};
console.log(userInfo)