const mongoose = require("mongoose");
const reservaSchema = mongoose.model("Reserva");
const datefns = require("date-fns");

module.exports = {
  async get(query) {
    try {
      const reservas = await reservaSchema
        .find({
          deleted: false,
        })
        .populate("consultor mesa", "-__v")
        .select("-__v");
      return { status: 200, dados: reservas };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async post(dados) {
    try {
      let data = new Date(dados.data);
      data = formataData(data);

      const verificaMesa = await reservaSchema.find({
        mesa: mongoose.Types.ObjectId(dados.mesa),
        data: data,
      });

      if (verificaMesa && verificaMesa.length >= 4) {
        return {
          status: 400,
          dados: { erro: "Máximo de reservas por mesa atingido." },
        };
      }

      dados.data = data;
      const reserva = await reservaSchema.create(dados);
      return { status: 200, dados: reserva };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async put(id, dados) {
    try {
      const reserva = await reservaSchema.findByIdAndUpdate(id, dados, {
        new: true,
      });
      return { status: 200, dados: reserva };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
  async delete(id) {
    try {
      const reservaSchema = mongoose.model("Reserva");
      const reserva = await reservaSchema.findByIdAndUpdate(id, {
        deleted: true,
      });
      return { status: 200, dados: reserva };
    } catch (error) {
      return { status: 500, dados: error };
    }
  },
};

function formataData(data) {
  data = datefns.setHours(data, 0);
  data = datefns.setMinutes(data, 0);
  data = datefns.setSeconds(data, 0);
  data = datefns.setMilliseconds(data, 0);
  return data;
}
