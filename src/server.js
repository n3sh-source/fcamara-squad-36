require("./schemas/Consultor");
require("./schemas/Filial");
require("./schemas/Reserva");
require("./schemas/Mesa");

const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.use("/", require("./routes/routes"));

    app.listen(3000, () => {
      console.log("Servidor na porta 3000");
    });
  });
