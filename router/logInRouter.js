const express = require("express");

const logInControllerCall = require("../controller/loginController");
const authentication = require("../middleware/authMiddleware");

const router = express.Router();

router.post('/logIn',authentication.authUser, logInControllerCall.userLogin);

module.exports = router;