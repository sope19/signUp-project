const express = require("express");
const signUpRoute = require("./router/signUpRouter");
const logInRoute = require("./router/logInRouter") 

const dbConnection = require("./config/db")

const app = express();

dbConnection()

app.use(express.json());
app.use("/api", signUpRoute)
app.use("/api", logInRoute)

const PORT = 4000;

app.listen(PORT)