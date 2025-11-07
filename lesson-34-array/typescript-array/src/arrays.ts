/*
map, filter, find, reduce
map - возвращает новый массив, в котором столько же элементов, сколько было
в исходном массив, и все элементы массива ПРЕОБРАЗОВАНЫ в соответствии с ОДНИМ правилом.
Если в результате у вас должен получиться новый массив, в котором будет столько же
элементов, сколько в исходном, но они все будут изменены одинаково, вы должны использовать map.

filter - возвращает новый массив, в котором обычно меньше элементов, чем в исходном, и в который
попадают элементы, отобранные по определенному правилу.

reduce - возвращает как правило не массив (число, строку, объект), который формируется ПО РЕЗУЛЬТАТАМ ПЕРЕБОРА
всего массива.
Если acum это другой тип данных, отличный от элемента массива, начальное значение acum нужно передавать
вторым аргументом в reduce.
*/

const sallariesInEuro: number[] = [0, 1500, 3000, 2500, 4000];
const sallaryInUsd: number[] = sallariesInEuro.map((sallary: number): number =>
  Math.ceil(sallary * 1.16),
);
/*
const func = (sallary) => Math.ceil(sallary * 1.16);
const sallaryInUsd = [];
for(let index = 0; index < sallariesInEuro.length; index+=1) {
    const arrayItem = sallariesInEuro[i];
    const transformArrayItem = func(arrayItem, index, sallariesInEuro);
    sallaryInUsd.push(sallaryInUsd);
}
return sallaryInUsd;
*/
// console.log(sallaryInUsd);
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
];
interface PostShortInfo {
  id: number;
  title: string;
}
// const postShortInfo: PostShortInfo[] = posts.map((post: Post): PostShortInfo => {
//     return {
//         id: post.id,
//         title: post.title
//     }
// });
const postShortInfo: PostShortInfo[] = posts.map(
  ({ id, title }: Post): PostShortInfo => ({
    id,
    title,
  }),
);
// console.log(postShortInfo);
// const postsWithHTML: Post[] = posts.map((post: Post): Post => ({
//     userId: post.userId,
//     id: post.id,
//     title: post.title,
//     body: post.body.replaceAll("\n", "<br />")
// }));
const postsWithHTML: Post[] = posts.map(
  (post: Post): Post => ({
    ...post,
    body: post.body.replaceAll("\n", "<br />"),
  }),
);
// console.log(postsWithHTML)
// const postTitles: string[] = posts.map((post: Post): string => post.title);
const postTitles: string[] = posts.map(({ title }: Post): string => title);
// console.log(postTitles)
const hightSallaries: number[] = sallariesInEuro.filter(
  (sallary: number): boolean => sallary >= 3000,
);
/*
const func = (sallary: number): boolean => sallary >= 3000);
const hightSallaries = [];
for(let index = 0; index < sallariesInEuro.length; index += 1) {
    const arrayItem = sallariesInEuro[index];
    const isAddToNewArray = Boolean(func(arrayItem, index, sallariesInEuro));
    if(isAddToNewArray) {
        hightSallaries.push(arrayItem);
    }
}
return hightSallaries;
*/
// console.log(hightSallaries)
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: true,
  },
];
const todosCompleted: Todo[] = todos.filter(
  ({ completed }: Todo): boolean => completed,
);
// console.log(todosCompleted)
// const todosUncompleted: Todo[] = todos.filter(({completed}: Todo): boolean => completed === false);
const todosUncompleted: Todo[] = todos.filter(
  ({ completed }: Todo): boolean => !completed,
);
// console.log(todosUncompleted)

const sallarySum: number = sallariesInEuro.reduce(
  (acum: number, sallary: number): number => acum + sallary,
);
/*
const func = (acum: number, sallary: number)=> acum + sallary;
let acum = sallariesInEuro[0];
for(let index = 0; index < sallariesInEuro.length; index +=1) {
    const arrayItem = sallariesInEuro[index];
    acum = func(acum, arrayItem, index, sallariesInEuro)
}
return acum;
*/
// console.log(sallarySum)
const completeTodosCount: number = todos.reduce((acum: number, item: Todo): number => {
    return acum + Number(item.completed);
    // if(item.completed) {
    //     return acum + 1;
    // }
    // return acum;
}, 0);
console.log(completeTodosCount);
