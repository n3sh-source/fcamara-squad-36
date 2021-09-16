const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();
const consultorSchema = mongoose.model("Consultor");
const crypt = require("bcryptjs");

module.exports = {
  async get(query) {
    try {
      const consultores = await consultorSchema
        .find({
          deleted: false,
        })
        .populate("filial", "-__v")
        .select("-__v");
      return { status: 200, dados: consultores };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async post(dados) {
    try {
      const consultor = await consultorSchema.create(dados);
      return { status: 200, dados: consultor };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async autenticacao(dados) {
    try {
      const consultor = await consultorSchema.findOne({
        email: dados.email,
      });
      if (!consultor) {
        return { status: 400, dados: { erro: "Usuario ou senha Invalido" } };
      }

      const comparar = await crypt.compare(dados.senha, consultor.senha);
      if (comparar == true) {
        return { status: 200, dados: consultor };
      } else {
        return { status: 400, dados: { erro: "Usuario ou senha Invalido." } };
      }
    } catch (error) {
      console.log(error);
      return { status: 500, dados: error };
    }
  },
  async put(id, dados) {
    try {
      const consultor = await consultorSchema.findByIdAndUpdate(id, dados, {
        new: true,
      });
      return { status: 200, dados: consultor };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async delete(id) {
    try {
      const consultorSchema = mongoose.model("Consultor");
      const consultor = await consultorSchema.findByIdAndUpdate(id, {
        deleted: true,
      });
      return { status: 200, dados: consultor };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
};
