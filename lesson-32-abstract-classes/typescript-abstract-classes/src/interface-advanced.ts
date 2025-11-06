type Role = "user" | "manager" | "admin";

// type User = {
//     username: string;
//     email: string;
//     password: string;
// };


// type UserWithRole = User & {role: Role};

interface User {
    username: string;
    email: string;
    password: string;
}

// interface UserWithRole extends User {
//     role: Role;
// }

interface User {
    role: Role;
}

const user: User = {
    username: "Bogdan",
    email: "bogdan@gmail.com",
    password: "123456",
    role: "user"
}

interface CalcWeightIndexFunc {
    (weight: number, height: number): number;
}

const calcWeightIndex: CalcWeightIndexFunc = (weight, height) => {
    const result = weight / (height ** 2);
    return Number(result.toFixed(2))
};

// console.log(calcWeightIndex(90, 1.9))

interface Admin {
    username: string;
    email: string;
    password: string;
    role: "admin",
    checkPassword: (pasword: string) => boolean;
};

const admin: Admin = {
    username: "Admin",
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    checkPassword(password) {
        return this.password === password;
    }
}