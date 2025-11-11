import axios from "axios";

interface Contact {
  _id: string;
  fullname: string;
  phone: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

const contacts: Contact[] = [
  {
    _id: "68f89a3a991691e55e1288f2",
    fullname: "Bohdan Liamzin",
    phone: "+38067-555-55-55",
    email: "bogdan.lyamzin.d@gmail.com",
    createdAt: "2025-10-22T08:47:54.396+00:00",
    updatedAt: "2025-10-22T08:47:54.396+00:00",
  },
  {
    _id: "68f89a3a991691e55e1288f3",
    fullname: "Nastya Liamzin",
    phone: "+38067-555-55-56",
    email: "nastya@gmail.com",
    createdAt: "2025-10-22T08:47:55.396+00:00",
    updatedAt: "2025-10-22T08:47:55.396+00:00",
  },
  {
    _id: "68f89a3a991691e55e1288f4",
    fullname: "Alina",
    phone: "+38067-555-55-57",
    email: "alina@gmail.com",
    createdAt: "2025-10-22T08:47:51.396+00:00",
    updatedAt: "2025-10-22T08:47:51.396+00:00",
  },
];

// const numbers = [1, 2, 5, 4, 7, 9, 4, 12];
// numbers.sort((a, b) => {
//     const diff = a - b;
//     console.log(`${a} - ${b} = ${diff}`);
//     return diff;
// })
// console.log(numbers)
// const date1: Date = new Date("2025-10-22T08:47:51.396+00:00");
// const date2: Date = new Date("2025-10-22T08:47:55.396+00:00");
// console.log(date1.getTime() - date2.getTime())
const sortCOntactsByCreateAt = (arr: Contact[]): Contact[] => {
  return [...arr].sort((a: Contact, b: Contact): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

// console.log(sortCOntactsByCreateAt(contacts));

interface Category {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const categories: Category[] = [
  {
    _id: "68f5f8d2b84bca733ebbd530",
    name: "work",
    createdAt: "2025-10-20T08:54:42.243+00:00",
    updatedAt: "2025-10-20T08:54:42.243+00:00",
  },
  {
    _id: "68f5f8d2b84bca733ebbd531",
    name: "friends",
    createdAt: "2025-10-20T08:54:40.243+00:00",
    updatedAt: "2025-10-20T08:54:40.243+00:00",
  },
  {
    _id: "68f5f8d2b84bca733ebbd532",
    name: "family",
    createdAt: "2025-10-20T08:54:38.243+00:00",
    updatedAt: "2025-10-20T08:54:38.243+00:00",
  },
];

const sortCategoriesByCreatedAt = (arr: Category[]): Category[] => {
  return [...arr].sort((a: Category, b: Category): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

interface ObjWithCreateAt {
  createdAt: string;
}

const sortByCreatedAt = <T extends ObjWithCreateAt>(arr: T[]): T[] => {
  return [...arr].sort((a: T, b: T): number => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
};

// console.log(sortByCreatedAt<Contact>(contacts));
// console.log(sortByCreatedAt<Category>(categories));

// console.log(sortCategoriesByCreatedAt(categories));

interface ObjWithDate {
  createdAt: string;
  updatedAt: string;
}

const sortByDate = <T>(arr: T[], sortBy: keyof T): T[] => {
  return [...arr].sort((a: T, b: T): number => {
    return (
      new Date(a[sortBy] as string).getTime() -
      new Date(b[sortBy] as string).getTime()
    );
  });
};

// console.log(sortByDate<Contact>(contacts, "createdAt"));
// console.log(sortByDate<Category>(categories, "updatedAt"));

// type Role = "user" | "support" | "admin" | "developer";

// interface User {
//   nickname: string;
//   email: string;
//   role: Role;
//   readTable(tableName: string, request: string): void;
//   writeTable(tableName: string, request: string): void;
// };

class Stack<T> {
    items: T[] = []
    constructor(items: T[]) {
        this.items = [...items];
    }

    push(newItem: T): void {
        this.items.push(newItem);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }
}

const numbersStack = new Stack<number>([1, 5, 3]);
const stringsStack = new Stack<string>(["Bohdan", "Nastya", "Alina"]);

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface ApiResponse<T> {
    status: number;
    statusText: string;
    data: T[]
}

const fetchPosts = async(): Promise<Post[]> => {
    const response: ApiResponse<Post> = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}

const fetchTodos = async(): Promise<Todo[]> => {
    const response: ApiResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return response.data;
}

const post = fetchPosts();
