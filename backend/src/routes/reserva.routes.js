const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const reservaSchema = mongoose.model("Reserva");
const datefns = require("date-fns");

routes.get("/", async (req, res) => {
  try {
    const data = new Date(req.body.data);
    new datefns();
    const reservas = await reservaSchema
      .find({
        deleted: false,
      })
      .populate("consultor mesa", "-__v")
      .select("-__v");
    res.send(reservas);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.post("/", async (req, res) => {
  try {
    let data = new Date(req.body.data);
    data = formataData(data);

    const verificaMesa = await reservaSchema.find({
      mesa: mongoose.Types.ObjectId(req.body.mesa),
      data: data,
    });

    if (verificaMesa && verificaMesa.length >= 4) {
      return res
        .status(400)
        .send({ erro: "Máximo de reservas por mesa atingido." });
    }

    req.body.data = data;

    const reserva = await reservaSchema.create(req.body);
    res.send(reserva);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.put("/:id", async (req, res) => {
  try {
    const reserva = await reservaSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(reserva);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.delete("/:id", async (req, res) => {
  try {
    const reservaSchema = mongoose.model("Reserva");
    const reserva = await reservaSchema.findByIdAndUpdate(req.params.id, {
      deleted: true,
    });
    res.send(reserva);
  } catch (error) {
    res.status(500).send({ error });
  }
});

function formataData(data) {
  data = datefns.setHours(data, 0);
  data = datefns.setMinutes(data, 0);
  data = datefns.setSeconds(data, 0);
  data = datefns.setMilliseconds(data, 0);
  return data;
}

module.exports = routes;
