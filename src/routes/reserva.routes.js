const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reservas = await reservaSchema
    .find({
      deleted: false,
    })
    .populate("consultor mesa", "-__v")
    .select("-__v");
  res.send(reservas);
});
routes.post("/", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reserva = await reservaSchema.create(req.body);
  res.send(reserva);
});
routes.put("/:id", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reserva = await reservaSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.send(reserva);
});
routes.delete("/:id", async (req, res) => {
  const reservaSchema = mongoose.model("Reserva");
  const reserva = await reservaSchema.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });
  res.send(reserva);
});

module.exports = routes;
