const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hellow world");
});
const PORT = 3000 || process.env;

app.listen(PORT, console.log(`listening on port ${PORT}`));
