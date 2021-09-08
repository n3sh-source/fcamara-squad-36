const express = require("express");
const app = express();

app.get("/aspaszin", (req, res) => {
  res.send("wow");
});

app.listen(3000, () => {
  console.log("Servidor na porta 3000");
});
