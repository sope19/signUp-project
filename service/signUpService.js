const express = require("express");
const userModel = require("../model/signupModel");


const userServiceLoginObj = {
    signUp: async (obj) => {
        const user = new userModel(obj);
        try {
            const userObj = await user.save();
            return userObj
        } catch (error){
            return error
        }
    }
}

module.exports = userServiceLoginObj;