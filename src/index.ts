const express = require("express");
const port = 4040;
const app = express();

// app.use();
app.listen(port, () => {
  console.log("app running on port: " + port);
});
