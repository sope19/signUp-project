const express = require("express");
const userService = require("../service/signUpService");
const userUtil = require("../util/signUpUtil");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userobj = {
    signUp: async (req, res) => {
        const userObj = req.body;
        userObj.password = await userUtil.passwordEncryption(userObj.password)
        if (userObj) {
            const user = await userService.signUp(userObj);
            jwt.sign(
                userObj,
                process.env.SIGNUP_SECRET_KEY,
                { expiresIn: 1800},
                (err, token) => {
                    if (err) {
                        return err.message;
                    }
                    return res.json({
                        msg: 'User created successfully',
                        data: user,
                        token: token
                    });
                }
            )
        } else {
            return res.json({msg: 'User data not supplied'});
        }
    }
}

module.exports = userobj;