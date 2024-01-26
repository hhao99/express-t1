const express = require("express");
const dotenv = require("dotenv");

// dotenv init
dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

// app.use((req, res) => {
//   res.send("Hello");
// });
app.listen(port, () => {
  console.log("app running on port: " + port);
});
