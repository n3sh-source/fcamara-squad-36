const mongoose = require("mongoose");

const MesaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  vagas: {
    type: Number,
    required: true,
  },
});
mongoose.model("Mesa", MesaSchema);
