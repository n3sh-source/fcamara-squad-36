const mongoose = require("mongoose");
const crypt = require("bcryptjs");

const ConsultorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  reservas: [{ ref: "Reserva", type: mongoose.Types.ObjectId, required: true }],
  filial: { ref: "Filial", type: mongoose.Types.ObjectId, required: true },
  deleted: {
    type: Boolean,
    default: false,
  },
  senha: {
    type: String,
    required: true,
  },
});

ConsultorSchema.pre("save", async function () {
  this.senha = await crypt.hash(this.senha, 10);
});

mongoose.model("Consultor", ConsultorSchema);
