const reserva = JSON.parse(localStorage.getItem("reserva"));
const resposta = document.getElementById("resposta");
const diaReserva = reserva.data.substring(0, 10);

const codigo = document.getElementById("codigo");
codigo.innerHTML = reserva.codigo;

let dia = "";
const day = new Date(reserva.data).getDay();
if (day == 0) dia = "Domingo";
if (day == 1) dia = "Segunda-Feira";
if (day == 2) dia = "Terça-Feira";
if (day == 3) dia = "Quarta-Feira";
if (day == 4) dia = "Quinta-Feira";
if (day == 5) dia = "Sexta-Feira";
if (day == 6) dia = "Sabádo";

resposta.innerHTML = diaReserva + " " + dia;
