const mongoose = require("mongoose");

const ReservaSchema = new mongoose.Schema({
  consultor: {
    ref: "Consultor",
    type: mongoose.Types.ObjectId,
    required: true,
  },
  mesa: { ref: "Mesa", type: mongoose.Types.ObjectId, required: true },
  data: {
    type: Date,
    required: true,
  },
});
mongoose.model("Reserva", ReservaSchema);

