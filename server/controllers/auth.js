const User = require("../models/User");
let jwt = require("jsonwebtoken");

/**
 * @api {post} /api/register create
 * @apiName create a User
 * @apiGroup User
 *
 * @apiParam {string} name name of user
 * @apiParam {string} email email of user
 * @apiParam {string} password password of user
 *
 * @apiParamExample {json} request-example
 * {
 *	"name":"test",
 *	"email":"test@test.com",
 *	"password":"test",
 *}
 *
 * @apiParamExample {json} response-example
 */
module.exports.register = async (req, res) => {
  return res.status(200).json({ message: "register" });
};
