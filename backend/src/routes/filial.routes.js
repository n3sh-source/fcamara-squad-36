const express = require("express");
const routes = express.Router();
const filialController = require("../controllers/filial.controller");

routes.get("/", filialController.get);
routes.post("/", filialController.post);
routes.put("/:id", filialController.put);
routes.delete("/:id", filialController.delete);

module.exports = routes;
