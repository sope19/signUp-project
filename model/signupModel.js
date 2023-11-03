const mongoose = require("mongoose")

const userSchema = mongoose.Schema ({
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    gender: String,
    password: String,
    dateCreated:{type: Date, default: Date.now}
});

const userSignUp = mongoose.model("userSignUp", userSchema);

module.exports = userSignUp;