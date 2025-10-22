export const handleSaveError = (error, doc, next) => {
  if (error.name === "ValidationError") {
    error.status = 400;
  }
  if (error.name === "MongoServerError") {
    error.status = 409;
  }
  next();
};

export const setUpdateSettings = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
