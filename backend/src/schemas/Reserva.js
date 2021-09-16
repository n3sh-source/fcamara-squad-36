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
  deleted: {
    type: Boolean,
    default: false,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  codigo: {
    type: Number,
    unique: true,
  },
});
ReservaSchema.pre("save", async function () {
  const time = String(new Date().getTime());
  const codigo = time.substring(5, 11);
  this.codigo = codigo;
});
mongoose.model("Reserva", ReservaSchema);
