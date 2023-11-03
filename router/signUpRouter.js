const express = require("express");
const signUpcontrollerCall = require ("../controller/signUpController");

const router = express.Router();

router.post('/signUp', signUpcontrollerCall.signUp);

module.exports = router;