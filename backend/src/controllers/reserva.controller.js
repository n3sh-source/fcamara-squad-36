const Reserva = require("../models/reserva.model");

module.exports = {
  async get(req, res) {
    const resposta = await Reserva.get(req.query);
    return res.status(resposta.status).send(resposta.dados);
  },
  async post(req, res) {
    const resposta = await Reserva.post(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async confirm(req, res) {
    const resposta = await Reserva.confirm(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async put(req, res) {
    const resposta = await Reserva.put(req.params.id, req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async delete(req, res) {
    const resposta = await Reserva.delete(req.params.id);
    return res.status(resposta.status).send(resposta.dados);
  },
};
