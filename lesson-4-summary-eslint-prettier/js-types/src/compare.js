console.log(1 < 3);
console.log(1 > 3);
console.log(1 >= 1);

console.log("6" > 4);
console.log("g" > 4);
console.log("f" < 4);
console.log("a" < 4);
console.log("Bohdan" > "Liamzin");
console.log("Bohdan" < "Liamzin");
console.log("Bohdan" < "a");
console.log("Bohdan" <= "Bohdan");
console.log("1" == 1); // сравнение с приведением типов - сначала приводим то, что слева и справа к одному типу, а потом сравниваем
console.log("1" === 1); // сравнение без приведения типов - сначала сравнивают типы данных слева и справа, если они разные - сразу возвращаем false
console.log(1 === 1);
console.log(NaN === NaN);
console.log({} === {});
console.log([] === []);
console.log("1" !== 1);
console.log(1 < 2 && 3 > 5);