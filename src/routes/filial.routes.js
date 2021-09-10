const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filiais = await filialSchema.find();
  res.send(filiais);
});
routes.post("/", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filial = await filialSchema.create(req.body);
  res.send(filial);
});

module.exports = routes;
