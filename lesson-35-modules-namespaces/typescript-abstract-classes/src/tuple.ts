type Point = [number, number];

const coords: Point = [34.12, 32.25];

type RGB = [number, number, number];

const color: RGB = [255, 255, 255, 355];

type SafeDivideReturn = [boolean, number?];

const safeDivide = (a: number, b: number): SafeDivideReturn => {
    if(b === 0) return [false];
    return [true, a / b];
}

const [ok, result] = safeDivide(10, 2);
// const [ok, result] = safeDivide(10, 0);
if(ok) {
    console.log(result);
}
else {
    console.log(`Cannot divided, b = 0`)
}