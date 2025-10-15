export const phone = {
    value: /^\+?[1-9]\d{0,2}[-\s]?(?:\(?\d+\)?[-\s]?){4,}$/,
    message: "Phone number must be expression: +x(xx)-xxx-xxx-xxx-xx",
};

export const email = {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Email must have @ and not have space"
}

export const priceMin = {
    value: 1,
    mesage: "Prica cannot be less 1"
}