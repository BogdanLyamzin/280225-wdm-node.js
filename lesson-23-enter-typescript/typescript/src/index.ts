// const username: string = "Bohdan";
// console.log(username.toFixed(2));
// const userAge: number = 42;
// // console.log(userAge.split(" "));
// const userMarriage: boolean = true;
// const userDog: null = null;

// let age: number = 32;
// age = "user";

// const getFullName = (name: string, lastName: string)=> {
//     return `${name} ${lastName}`;
// }

// console.log(getFullName("Bohdan", "Liamzin"));

const markList: number[] = [1, 3, 2, 5, 3];
// const markList: Array<number> = [1, 3, 2, 5, 3];

// markList.forEach(item => item.split(" "));
const getHighstMark = (arr: number[]) => Math.max(...arr);
// console.log(getHighstMark(markList))

interface User {
  name: string;
  lastName: string;
  age: number;
  phone: string;
}

// type User = {
//       name: string;
//   lastName: string;
//   age: number;
// }

const user: User = {
  name: "Bohdan",
  lastName: "Liamzin",
  phone: "",
  age: 39,
};

const getUserFullName = ({name, lastName}: User): string => {
  return `${name} ${lastName}`;
};

const userFullName = getUserFullName(user);

const logUser = (user: User): void => {
    console.log(JSON.stringify(user, null, 2));
}

logUser(user);

const users: User[] = [user];