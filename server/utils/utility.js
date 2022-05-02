const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports.jwtToken = (payload) => {
  let secret = process.env.TOKEN_SECRET;
  let token = jwt.sign(payload, secret);
  return token;
};

module.exports.hash = function (password, callback) {
  let saltRounds = Number(process.env.SALT_ROUND);
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      callback(err, hash);
    });
  });
};

module.exports.check = (password, hash, callback) => {
  bcrypt.compare(password, hash, (error, check) => {
    callback(error, check);
  });
};

module.exports.hashDate = (date, start, end) => {
  return date + start + end;
};
