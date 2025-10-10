export const isLeapYear = year => {
    if(year === undefined) {
        throw new TypeError("Type error", "Argument must be only integer");
    }
    if(typeof year !== "number") {
        throw new TypeError("Type error", "Argument must be only integer");
    }
    if(Number.isNaN(year)) {
        throw new TypeError("Type error", "Argument must be only integer");
    }
    if(!Number.isFinite(year)) {
        throw new TypeError("Type error", "Argument must be only integer");
    }

    const date = new Date(year, 2, 0);
    return 29 === date.getDate();
}