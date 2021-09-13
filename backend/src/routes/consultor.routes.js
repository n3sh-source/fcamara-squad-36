const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const consultorSchema = mongoose.model("Consultor");

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
