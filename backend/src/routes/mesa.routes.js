const express = require("express");
const routes = express.Router();
const mesaController = require("../controllers/mesa.controller");

routes.get("/", mesaController.get);
routes.post("/", mesaController.post);
routes.put("/:id", mesaController.put);
routes.delete("/:id", mesaController.delete);

module.exports = routes;
