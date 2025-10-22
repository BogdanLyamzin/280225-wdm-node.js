import HttpError from "./HttpError.js";

const validateBody = (schema, body)=> {
    const {error} = schema.safeParse(body);
    if(error) {
        const {message} = JSON.parse(error.message)[0];
        throw HttpError(400, message);
    }
    return true;
}

export default validateBody;