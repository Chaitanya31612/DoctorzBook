const User = require("../models/User");
const utility = require("../utils/utility");
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
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email missing." });
    }

    User.findOne({ email: email.toLowerCase() }, async (error, response) => {
      if (error) {
        return res
          .status(400)
          .json({ message: "error occurred", error: error });
      } else if (response) {
        return res.status(200).json({
          message: "user already exist with same email id",
          response: response,
        });
      } else {
        utility.hash(req.body.password, (error, hash) => {
          req.body.password = hash;
          req.body.email = req.body.email.toLowerCase();
          User.create(req.body, (error, response) => {
            if (error) {
              console.log("user not registered", error);
              return res
                .status(400)
                .json({ message: "error occurred", error: error });
            } else if (response) {
              return res.status(200).json({
                message: "user created successfully",
                response: response,
              });
            } else {
              return res
                .status(400)
                .json({ message: "error occurred", error: error });
            }
          });
        });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to register" });
  }
};

/**
 * @api {post} /api/login login
 * @apiName login a User
 * @apiGroup User
 * @apiParam {string} email email of user
 * @apiParam {string} password password of user
 **/
module.exports.login = async (req, res) => {
  try {
    console.log(req.body.email, req.body.password);
    let check = {
      email: req.body.email ? req.body.email.toLowerCase() : req.body.email,
    };
    let response = await User.findOne(check);
    if (response) {
      utility.check(req.body.password, response.password, (error, match) => {
        if (match) {
          let token = utility.jwtToken({
            id: response._id,
            email: response.email,
            userType: response.userType,
          });
          return res.status(200).json({
            message: "user found, token sent",
            token: token,
            user: response,
          });
        } else {
          return res
            .status(404)
            .json({ message: "Invalid email id or password" });
        }
      });
    } else {
      return res.status(404).json({ message: "Invalid email id or password" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Unable to Log in" });
  }
};
