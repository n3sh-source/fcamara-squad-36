const Consultor = require("../models/consultor.model");

module.exports = {
  async get(req, res) {
    const resposta = await Consultor.get(req.query);
    return res.status(resposta.status).send(resposta.dados);
  },
  async post(req, res) {
    const resposta = await Consultor.post(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async autenticacao(req, res) {
    const resposta = await Consultor.autenticacao(req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async put(req, res) {
    const resposta = await Consultor.put(req.params.id, req.body);
    return res.status(resposta.status).send(resposta.dados);
  },
  async delete(req, res) {
    const resposta = await Consultor.delete(req.params.id);
    return res.status(resposta.status).send(resposta.dados);
  },
};
