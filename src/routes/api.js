const express = require("express");
const UsersController = require("../controllers/UsersController");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
//   res.end();
// });

router.post("/registration", UsersController.registration);
// router.post("/login", UsersController.login);

module.exports = router;
