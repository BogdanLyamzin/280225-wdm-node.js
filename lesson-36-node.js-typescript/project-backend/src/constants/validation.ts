interface Validation {
    message: string;
}

interface ValidationRegExp extends Validation {
    value: RegExp;
}

interface ValidationNumber extends Validation {
    value: number;
}

export const phone: ValidationRegExp = {
    value: /^\+?[1-9]\d{0,2}[-\s]?(?:\(?\d+\)?[-\s]?){4,}$/,
    message: "Phone number must be expression: +x(xx)-xxx-xxx-xxx-xx",
};

export const email: ValidationRegExp = {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Email must have @ and not have space"
}

export const priceMin: ValidationNumber = {
    value: 1,
    message: "Prica cannot be less 1"
}