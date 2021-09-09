const mongoose = require("mongoose");

const FilialSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});
mongoose.model("Filial", FilialSchema);
