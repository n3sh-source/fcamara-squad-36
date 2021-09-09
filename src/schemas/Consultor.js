const mongoose = require("mongoose");

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
});
mongoose.model("Consultor", ConsultorSchema);
