const Mesa = require("../models/mesa.models");

module.exports = {
  async get(req, res) {
    const resposta = await Mesa.get(req.query);
    return res.status(resposta.status).send(resposta.dados);
  },
  async post(req, res) {
    const resposta = await Mesa.post(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async put(req, res) {
    const resposta = await Mesa.put(req.params.id, req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async delete(req, res) {
    const resposta = await Mesa.delete(req.params.id);
    return res.status(resposta.status).send(resposta.dados);
  },
};
