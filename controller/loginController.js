const express = require("express");

const userLogInObj = {
    userLogin: async (req, res) => {
        return res.json({msg: 'User created successfully'})
    }
}

module.exports = userLogInObj;