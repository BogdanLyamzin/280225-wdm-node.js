// const now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toLocaleString());

// console.log(new Date("11/11/2025"));
// console.log(new Date("2025-11-11"));

// const now = new Date();
// console.log(now.toLocaleDateString())
// const year = now.getFullYear();
// const month = now.getMonth() + 1;
// const day = now.getDate();
// const date = `${day}/${month}/${year}`;
// console.log(date)

// const now = new Date();
// now.setDate(now.getDate() + 1);
// console.log(now);
import { DateTime } from "luxon";

const now = DateTime.now();
const {year, month, day} = now;
// console.log(`Год ${year}. Месяц ${month}. День ${day}`);
const nowUTC = DateTime.utc();
// console.log(nowUTC);
const nowLA = DateTime.now().setZone("America/Los_Angeles");
// console.log(nowLA);
// console.log(now.toFormat("yyyy-dd-MM"));
const tomorrow = now.plus({days: 1});
console.log(tomorrow);
console.log(now);
console.log(now.minus({month: 1}));