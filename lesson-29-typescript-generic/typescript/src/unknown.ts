import axios from "axios";

const userName: unknown = "Bohdan";
// console.log(userName.toFixed(2));

const userAge: unknown = 39;
if (typeof userAge === "string") {
  console.log(userAge.split(" "));
}

interface Book {
  title: string;
  author: string;
  releaseYear: number;
}

const books: Book[] = [
  {
    title: "Messia of Dune",
    author: "Gerbert Frank",
    releaseYear: 1972,
  },
  {
    title: "Dune",
    author: "Gerbert Frank",
    releaseYear: 1965,
  },
];

const sortBookCallback = (a: Book, b: Book): number => {
  return a.releaseYear - b.releaseYear;
};

const sortBooksByRealeaseYear = (arr: unknown): Book[] => {
  //   if (Array.isArray(arr)) {
  //     return [...arr].sort(sortBookCallback);
  //   }
  if (arr instanceof Array) {
    return [...arr].sort(sortBookCallback);
  }
  throw new Error("Books must be array");
};

const sortedBooks: Book[] = sortBooksByRealeaseYear(books);



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const fetchPosts = async ()=> {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
}

const posts: unknown = await fetchPosts();
if(posts instanceof Array) {
    console.log(`We have ${posts.length} posts`)
} else {
    console.log("Posts not array")
}


