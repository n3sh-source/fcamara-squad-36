const mongoose = require("mongoose");

const FilialSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
});
mongoose.model("Filial", FilialSchema);
