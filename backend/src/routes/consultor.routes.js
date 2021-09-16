const express = require("express");
const routes = express.Router();
const consultorController = require("../controllers/consultor.controller");

routes.get("/", consultorController.get);
routes.post("/", consultorController.post);
routes.post("/autenticacao", consultorController.autenticacao);
routes.put("/:id", consultorController.put);
routes.delete("/:id", consultorController.delete);

module.exports = routes;
