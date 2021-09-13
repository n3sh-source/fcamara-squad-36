const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filiais = await filialSchema
    .find({
      deleted: false,
    })
    .select("-__v");
  res.send(filiais);
});
routes.post("/", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filial = await filialSchema.create(req.body);
  res.send(filial);
});
routes.put("/:id", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filial = await filialSchema.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(filial);
});
routes.delete("/:id", async (req, res) => {
  const filialSchema = mongoose.model("Filial");
  const filial = await filialSchema.findByIdAndUpdate(req.params.id, {
    deleted: true,
  });
  res.send(filial);
});

module.exports = routes;
