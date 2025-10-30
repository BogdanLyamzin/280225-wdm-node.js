
//@ts-expect-error
const getFullName = (name: string, lastName) => {
    //@ts-expect-error
    console.log(name.toFixed(2))
    return `${name} ${lastName}`;
}

console.log(getFullName("Bohdan", 42));