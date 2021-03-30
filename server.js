"use strict";

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = process.env.PORT;

const User = require("./models/user");
const userHandler = require("./models/userHandler");

const elijah = new User({
  // email: "elijahprom@gmail.com",
  email:"dyioan@gmail.com",
  books: [
    { name: "Harry Potter", description: "Goblet of Fire", status: "read" },
    { name: "Harry Potter", description: "Chamber of Secrets", status: "read" },
    {
      name: "Harry Potter",
      description: "Half-Blood Prince",
      status: "reading",
    },
  ],
});
app.get("/books", userHandler);
elijah.save()

// console.log("elijahs books", elijah);

//MiddleWares
// app.use("/middleware", () => {
//   console.log("this is a middleware running");
// });

//ROUTES
app.get("/", (req, res) => {
  // let x = elijah.find()
  
  res.send("proof of life");
});

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
