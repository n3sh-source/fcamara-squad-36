require("./schemas/Consultor");
require("./schemas/Filial");
require("./schemas/Reserva");
require("./schemas/Mesa");

const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    ///////////////////////filiais//////////////////////////////////
    app.get("/filial", async (req, res) => {
      const filialSchema = mongoose.model("Filial");
      const filiais = await filialSchema.find();
      res.send(filiais);
    });
    app.post("/filial", async (req, res) => {
      const filialSchema = mongoose.model("Filial");
      const filial = await filialSchema.create(req.body);
      res.send(filial);
    });
    /////////////////////////////////////////////////////////////
    ///////////////////////mesa//////////////////////////////////
    app.get("/mesa", async (req, res) => {
      const mesaSchema = mongoose.model("Mesa");
      const mesas = await mesaSchema.find();
      res.send(mesas);
    });
    app.post("/mesa", async (req, res) => {
      const mesaSchema = mongoose.model("Mesa");
      const mesa = await mesaSchema.create(req.body);
      res.send(mesa);
    });
    ////////////////////////////////////////////////////////////////
    ///////////////////////consultor////////////////////////////////
    app.get("/consultor", async (req, res) => {
      const consultorSchema = mongoose.model("Consultor");
      const consultores = await consultorSchema.find();
      res.send(consultores);
    });
    app.post("/consultor", async (req, res) => {
      const consultorSchema = mongoose.model("Consultor");
      const consultor = await consultorSchema.create(req.body);
      res.send(consultor);
    });
    ////////////////////////////////////////////////////////////////
    ///////////////////////reserva/////////////////////////////////
    app.get("/reserva", async (req, res) => {
      const reservaSchema = mongoose.model("Reserva");
      const reservas = await reservaSchema.find();
      res.send(reservas);
    });
    app.post("/reserva", async (req, res) => {
      const reservaSchema = mongoose.model("Reserva");
      const reserva = await reservaSchema.create(req.body);
      res.send(reserva);
    });
    ////////////////////////////////////////////////////////////////

    app.listen(3000, () => {
      console.log("Servidor na porta 3000");
    });
  });
