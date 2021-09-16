require("./schemas/Consultor");
require("./schemas/Filial");
require("./schemas/Reserva");
require("./schemas/Mesa");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://hackaton:1E0uIPWHY6QUQzvI@hackaton.qy7jp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.use("/", require("./routes/routes"));

    app.listen(3000, () => {
      console.log("Servidor na porta 3000");
    });
  });
