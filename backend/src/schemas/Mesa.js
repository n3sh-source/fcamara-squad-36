const mongoose = require("mongoose");

const MesaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  vagas: {
    type: Number,
    default: 4,
  },
  filial: { ref: "Filial", type: mongoose.Types.ObjectId, required: true },
  deleted: {
    type: Boolean,
    default: false,
  },
  codigo: {
    type: Number,
    unique: true,
  },
});

MesaSchema.pre("save", async function () {
  const time = String(new Date().getTime());
  const codigo = time.substring(5, 11);
  this.codigo = codigo;
});

mongoose.model("Mesa", MesaSchema);
