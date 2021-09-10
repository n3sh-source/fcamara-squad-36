const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultores = await consultorSchema
    .find({
      deleted: false,
    })
    .populate("filial", "-__v")
    .select("-__v");
  res.send(consultores);
});
routes.post("/", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultor = await consultorSchema.create(req.body);
  res.send(consultor);
});
routes.put("/:id", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultor = await consultorSchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.send(consultor);
});
routes.delete("/:id", async (req, res) => {
  const consultorSchema = mongoose.model("Consultor");
  const consultor = await consultorSchema.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });
  res.send(consultor);
});

module.exports = routes;
