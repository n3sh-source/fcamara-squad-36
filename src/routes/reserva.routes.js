const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reservas = await reservaSchema
    .find()
    .populate("consultor mesa", "-__v")
    .select("-__v");
  res.send(reservas);
});
routes.post("/", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reserva = await reservaSchema.create(req.body);
  res.send(reserva);
});

module.exports = routes;
