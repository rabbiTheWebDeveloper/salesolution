const express = require("express");
const router = express.Router();

router.post("/registration", UsersController.registration);
router.post("/login", UsersController.login);

module.exports = router;
