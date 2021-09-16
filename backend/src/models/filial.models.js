const mongoose = require("mongoose");
const filialSchema = mongoose.model("Filial");

module.exports = {
  async get(query) {
    try {
      const filiais = await filialSchema
        .find({
          deleted: false,
        })
        .select("-__v");
      return { status: 200, dados: filiais };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async post(dados) {
    try {
      const filial = await filialSchema.create(dados);
      return { status: 200, dados: filial };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async put(id, dados) {
    try {
      const filial = await filialSchema.findByIdAndUpdate(id, dados, {
        new: true,
      });
      return { status: 200, dados: filial };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async delete(id) {
    try {
      const filial = await filialSchema.findByIdAndUpdate(id, {
        deleted: true,
      });
      return { status: 200, dados: filial };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
};
