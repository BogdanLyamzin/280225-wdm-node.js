import {ValidationError, UniqueConstraintError} from "sequelize";

const errorHandler = (error, req, res, next)=> {
    if(error instanceof ValidationError) {
        error.status = 400;
    }
    if(error instanceof UniqueConstraintError) {
        error.status = 409;
    }
    const {status = 500, message = "Server error"} = error;
    res.status(status).json({
        message,
    });
};

export default errorHandler;