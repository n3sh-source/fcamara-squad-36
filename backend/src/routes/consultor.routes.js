const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const consultorSchema = mongoose.model("Consultor");
const crypt = require("bcryptjs");

routes.get("/", async (req, res) => {
  try {
    const consultores = await consultorSchema
      .find({
        deleted: false,
      })
      .populate("filial", "-__v")
      .select("-__v");
    res.send(consultores);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.post("/", async (req, res) => {
  try {
    const consultor = await consultorSchema.create(req.body);
    res.send(consultor);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.post("/autenticacao", async (req, res) => {
  try {
    const consultor = await consultorSchema.findOne({ email: req.body.email });
    if (!consultor) {
      return res.status(400).send({ error: "Usuario ou senha Invalido" });
    }

    const comparar = await crypt.compare(req.body.senha, consultor.senha);
    if (comparar == true) {
      res.send(consultor);
    } else {
      res.status(400).send({ error: "Usuario ou senha Invalido" });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.put("/:id", async (req, res) => {
  try {
    const consultor = await consultorSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(consultor);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.delete("/:id", async (req, res) => {
  try {
    const consultorSchema = mongoose.model("Consultor");
    const consultor = await consultorSchema.findByIdAndUpdate(req.params.id, {
      deleted: true,
    });
    res.send(consultor);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = routes;
