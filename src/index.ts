const express = require("express");
const port = 4040;
const app = express();

app.use((req, res) => {
  res.send("Hello");
});
app.listen(port, () => {
  console.log("app running on port: " + port);
});
