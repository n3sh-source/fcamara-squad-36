const mongoose = require("mongoose");
const mesaSchema = mongoose.model("Mesa");

module.exports = {
  async get(query) {
    try {
      const mesas = await mesaSchema
        .find({
          deleted: false,
        })
        .populate("filial", "-__v")
        .select("-__v");
      return { status: 200, dados: mesas };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async post(dados) {
    try {
      const mesa = await mesaSchema.create(dados);
      return { status: 200, dados: mesa };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async put(id, dados) {
    try {
      const mesa = await mesaSchema.findByIdAndUpdate(id, dados, {
        new: true,
      });
      return { status: 200, dados: mesa };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async delete(id) {
    try {
      const mesa = await mesaSchema.findByIdAndUpdate(id, {
        deleted: true,
      });
      return { status: 200, dados: mesa };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
};
