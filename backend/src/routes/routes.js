const express = require("express");
const routes = express.Router();

routes.use("/filial", require("./filial.routes"));
routes.use("/mesa", require("./mesa.routes"));
routes.use("/consultor", require("./consultor.routes"));
routes.use("/reserva", require("./reserva.routes"));

module.exports = routes;
