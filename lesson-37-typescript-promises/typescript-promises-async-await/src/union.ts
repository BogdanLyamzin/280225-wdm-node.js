type Role = "admin" | "user" | "manager";

interface User {
    username: string;
    email: string;
    role: Role;
    age: number | string;
}

const users: User[] = [
    {
        username: "Bohdan Liamzin",
        email: "bogdan@gmail.com",
        role: "user",
        age: "39",
    },
    {
        username: "Nastya",
        email: "nastya@gmail.com",
        role: "admin",
        age: 30,
    },
    {
        username: "Katya",
        email: "katya@gmail.com",
        role: "manager",
        age: 35
    }
];

type RequestStatus = "idle" | "loading" | "success" | "error";

type SuccessStatusCode = 200 | 201 | 204;

type FrontendErrorStatusCode = 400 | 401 | 403 | 404 | 409;

type ServerErrorStatusCode = 500 | 501 | 502;

type StatusCode = SuccessStatusCode | FrontendErrorStatusCode | ServerErrorStatusCode;

const responseStatus: StatusCode = 301;
