const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesas = await mesaSchema.find().populate("filial", "-__v").select("-__v");
  res.send(mesas);
});
routes.post("/", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesa = await mesaSchema.create(req.body);
  res.send(mesa);
});

module.exports = routes;
