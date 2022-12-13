const { body } = require("express-validator");
const User = require("../models/User");
const signupValidation = [
  body("name").not().isEmpty().trim().withMessage("Name is required"),
  body("shopName")
    .isEmpty()
    .withMessage("Please provide a valid shop")
    .custom(async (shopName) => {
      const user = await User.findOne({ shopName });
      if (user) {
        return Promise.reject("shopName already use");
      }
    }),

  body("domainName")
    .isEmpty()
    .withMessage("Please provide a valid domainName")
    .custom(async (domainName) => {
      const user = await User.findOne({ domainName });
      if (user) {
        return Promise.reject("domainName already use");
      }
    }),

  body("phone")
    .isEmpty()
    .isLength({ min: 11 })
    .withMessage("Please provide a valid phone")
    .custom(async (phone) => {
      const user = await User.findOne({ phone });
      if (user) {
        return Promise.reject("phone already use");
      }
    }),

  body("email")
    .isEmail()
    .withMessage("Please provide a valid email")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        return Promise.reject("Email already use");
      }
    })
    .normalizeEmail(),
  body("password")
    .isLength({ min: 6 })
    .withMessage("password should be 6 characters long"),
];

module.exports = {
  signupValidation,
};
