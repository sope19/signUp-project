const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log(process.env.mongo_uri);
    const conn = await mongoose.connect(process.env.mongo_uri, {
      useNewUrlParser: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = connectDB;