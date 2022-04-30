var Joi = require("joi");
var emailregex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
  login: {
    body: {
      email: Joi.string().email().regex(emailregex).required(),
      password: Joi.string()
        .regex(/[a-zA-Z0-9]{3,30}/)
        .required(),
    },
  },
  register: {
    body: {
      name: Joi.string().min(1).max(60).trim().required(), // string using string-based notation
      email: Joi.string().email().regex(emailregex).required(),
      // password: Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),
      password: Joi.string().min(6).required(),
      userType: Joi.string().required(),
      phone: Joi.string().required(),
    },
  },
  token: {
    body: {
      token: Joi.string().required(),
    },
  },
};
