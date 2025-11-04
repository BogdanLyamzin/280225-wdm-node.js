const errorHandler = (error, req, res, next) => {
    const { status = 500, message = "Server error" } = error;
    res.status(status).json({
        message,
    });
};
export default errorHandler;
//# sourceMappingURL=errorHandler.js.map