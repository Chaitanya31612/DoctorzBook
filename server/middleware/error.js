const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Interval Server Error";

  //Wrong Mongodb Id error
  if (err.name === "CastError") {
    const message = `Resource not found.Invalid:${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //Wrong JWT error
  if (err.code === "JsonWebTokenError") {
    const message = `Json Web Token is invalid,Try again`;
    err = new ErrorHandler(message, 400);
  }
  //JWT EXPIRE ERROR
  if (err.code === "TokenExpiredError") {
    const message = `json Web Token is Expired,Try again`;
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
