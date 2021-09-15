const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const mesaSchema = mongoose.model("Mesa");

routes.get("/", async (req, res) => {
  try {
    const mesas = await mesaSchema
      .find({
        deleted: false,
      })
      .populate("filial", "-__v")
      .select("-__v");
    res.send(mesas);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.post("/", async (req, res) => {
  try {
    const mesa = await mesaSchema.create(req.body);
    res.send(mesa);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.put("/:id", async (req, res) => {
  try {
    const mesa = await mesaSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(mesa);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.delete("/:id", async (req, res) => {
  try {
    const mesa = await mesaSchema.findByIdAndUpdate(req.params.id, {
      deleted: true,
    });
    res.send(mesa);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = routes;
