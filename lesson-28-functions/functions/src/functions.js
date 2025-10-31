/*
1. Придумываете название функции. Помните что функция всегда начинается сглагола
(исключение - функции, возвращающие объекты, они называются существительным
    с большой буквы в единственном числе: Error, User, Document
). Глагол должен указывать на то, что функция делет и возвращает:
- get - получить;
- calc - посчитать;
- convert - преобразовать;
- is - проверяет и возвращает true или false;
2. Думаете какие данные она должна получать при вызове чтобы сделать то, что 
вы от нее хотите. - описываете параметры функции.
3. Думаете о том, что она должна возвращать.
*/

function convertEuro (sum, currency) {
    switch(currency) {
        case "usd":
            return sum * 1.16;
        case "pound":
            return sum / 1.5;
        default:
            throw new Error("Invalid currency");
    }
}

const sum = 1000;

const sumInUsd = convertEuro(sum, "usd");
// console.log(sumInUsd);
/*
var sum = sum;
var currency = "usd";
var result;
switch(currency) {
    case "usd":
        result = sum * 1.16;
    case "pound":
        result = sum / 1.5;
    default:
        throw new Error("Invalid currency");
}
const sumInUsd = result;
delete sum;
delete currency;
delete result;
*/
// console.log(convertEuro(1000, "pound"));
// console.log(convertEuro(1000,));
// var sum = 1000;
// var currency;

const calcDose = ({weight, height, bodyFat}) => {
    console.log(weight);
    console.log(height);
    console.log(bodyFat)
}

// calcDose(1.9, 90, 15)
const userInfo = {
    weight: 90,
    height: 1.9,
    bodyFat: 15
}
const newUserInfo = calcDose(userInfo);
// var {weight, height, bodyFat} = userInfo;
