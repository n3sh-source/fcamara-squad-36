const Filial = require("../models/filial.models");

module.exports = {
  async get(req, res) {
    const resposta = await Filial.get(req.query);
    return res.status(resposta.status).send(resposta.dados);
  },
  async post(req, res) {
    const resposta = await Filial.post(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async put(req, res) {
    const resposta = await Filial.put(req.params.id, req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async delete(req, res) {
    const resposta = await Filial.delete(req.params.id);
    return res.status(resposta.status).send(resposta.dados);
  },
};
