console.log(typeof null); // object - старая ошибка
function createUser(name, lastName, role = createUser.roles[0]) {
    return {
        name,
        lastName,
        role,
        getFullName() {
            return `${this.name} ${this.lastName}`
        }
    }
};
createUser.roles = ["user", "manager", "admin"];

console.log(typeof createUser);
const user = createUser("Bohdan", "Liamzin");
console.log(user);
const arr = [1, 2, 5];
console.log(typeof arr);
console.log(Array.isArray(arr));
console.log(Array.isArray({}));

console.log(typeof 5);
console.log(typeof -5);
console.log(Number("Bohdan"));
console.log(typeof Number("Bohdan"));
console.log(1 / 0)
console.log(typeof (1 / 0))
console.log(isNaN("Bohdan"))
console.log(Number.isNaN("Bohdan"))
console.log(Number.isNaN(NaN))