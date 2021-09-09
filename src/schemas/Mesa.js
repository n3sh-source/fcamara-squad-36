const mongoose = require("mongoose");

const MesaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  vagas: {
    type: Number,
    default: 4 
  },
  filial: { ref: "Filial", type: mongoose.Types.ObjectId, required: true },
  
});
mongoose.model("Mesa", MesaSchema);

