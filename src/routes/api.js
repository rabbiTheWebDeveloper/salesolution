const express = require("express");
const UsersController = require("../controllers/UsersController");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
//   res.end();
// });
// router.get("/", (req, res) => {
//   res.status(200).json({ status: "successfully", data: "Asslamu Alikum" });
// });

router.post("/registration", UsersController.registration);
router.post("/login", UsersController.login);
<<<<<<< Updated upstream
=======
// router.post("/login", UsersController.login);
>>>>>>> Stashed changes

module.exports = router;
