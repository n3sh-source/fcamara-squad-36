const express = require("express");
const routes = express.Router();
const reservaController = require("../controllers/reserva.controller");

routes.get("/", reservaController.get);
routes.post("/", reservaController.post);
routes.post("/confirmacao", reservaController.confirm);
routes.put("/:id", reservaController.put);
routes.delete("/:id", reservaController.delete);

module.exports = routes;
