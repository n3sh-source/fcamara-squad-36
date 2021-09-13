const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const filialSchema = mongoose.model("Filial");

routes.get("/", async (req, res) => {
  try {
    const filiais = await filialSchema
      .find({
        deleted: false,
      })
      .select("-__v");
    res.send(filiais);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.post("/", async (req, res) => {
  try {
    const filial = await filialSchema.create(req.body);
    res.send(filial);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.put("/:id", async (req, res) => {
  try {
    const filial = await filialSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(filial);
  } catch (error) {
    res.status(500).send({ error });
  }
});
routes.delete("/:id", async (req, res) => {
  try {
    const filial = await filialSchema.findByIdAndUpdate(req.params.id, {
      deleted: true,
    });
    res.send(filial);
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = routes;
