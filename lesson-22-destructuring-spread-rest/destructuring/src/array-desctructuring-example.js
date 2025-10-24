const user = {
    name: "Тайвин",
    lastName: "Ланнистер",
    status: "глава дома Ланнистеров",
    castle: "Утес Кастерли",
    words: "Услышь мой рев!",
    sword: "Светлый рев",
};
const newUser = {};
for(const [key, value] of Object.entries(user)) {
    newUser[key] = value;
}
// for(const key in user) {
//     const value = user[key];
//     newUser[key] = value;
// }
// console.log(newUser)

const getMaxAge = (...args) => {
    return Math.max(...args);
}

console.log(getMaxAge(38, 16, 25, 42));
console.log(getMaxAge(55, 36, 12));

const users = ["Bogdan", "Nastya"];
const admins = ["Andrey", "Alex"];
const allUsers = [...users, ...admins];
console.log(allUsers)