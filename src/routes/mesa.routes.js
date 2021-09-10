const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesas = await mesaSchema
    .find({
      deleted: false,
    })
    .populate("filial", "-__v")
    .select("-__v");
  res.send(mesas);
});
routes.post("/", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesa = await mesaSchema.create(req.body);
  res.send(mesa);
});
routes.put("/:id", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesa = await mesaSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(mesa);
});
routes.delete("/:id", async (req, res) => {
  const mesaSchema = mongoose.model("Mesa");
  const mesa = await mesaSchema.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });
  res.send(mesa);
});

module.exports = routes;
