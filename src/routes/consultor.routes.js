const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultores = await consultorSchema.find().populate("filial", "-__v").select("-__v");
  res.send(consultores);
});
routes.post("/", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultor = await consultorSchema.create(req.body);
  res.send(consultor);
});

module.exports = routes;
