const { ValidationError} = require("sequelize")

function logErrors(error,req,res,next){
  console.log("logErrors()");
  console.error(error);
  next(error);
}

function ormErrorHandler(error,req,res,next){
  if(error instanceof ValidationError){
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    });
  }
  next(error);
}

function errorHandler(error,req,res,next){
  console.log("errorHandler()");
  res.status(500).json({
    message: error.message,
    stack: error.stack
  });
}

function errorRequestParams(message,res){
  res.status(409).json({
    message: message,
  });
}

module.exports = {logErrors,errorHandler,ormErrorHandler,errorRequestParams};
