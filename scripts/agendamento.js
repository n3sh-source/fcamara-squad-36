const data = new Date().toISOString().slice(0, 10);
document.getElementById("data").setAttribute("min", data);

fetch("http://localhost:3000/mesa", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then(async (resposta) => {
    resposta = await resposta.json();
    const select = document.getElementById("mesas");
    for (const mesa of resposta) {
      const option = document.createElement("option");
      option.setAttribute("label", mesa.nome);
      option.setAttribute("value", mesa._id);

      select.appendChild(option);
    }
  })
  .catch((error) => {
    alert("Email e ou senha invalidos");
  });

const agendar = document.getElementById("agendar");
agendar.addEventListener("click", (evento) => {
  const data = document.getElementById("data").value;
  const ano = data.substring(0, 4);
  const mes = data.substring(5, 7);
  const dia = data.substring(8, 10);
  const novaData = new Date(ano, mes - 1, dia);
  const select = document.getElementById("mesas");
  const mesaId = select.options[select.selectedIndex].value;
  const consultor = JSON.parse(localStorage.getItem("consultor"));

  const dados = { mesa: mesaId, data: novaData, consultor: consultor._id };
  fetch("http://localhost:3000/reserva", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  })
    .then(async (resposta) => {
      if (resposta.status != 200) {
        resposta = await resposta.json();
        return alert(resposta.erro);
      }
      resposta = await resposta.json();
      localStorage.setItem("reserva", JSON.stringify(resposta));
      alert("Reserva agendada com sucesso");
      window.location.href = "./reserva.html";
    })
    .catch((error) => {
      alert("Verifique todos os campos e tente novamente");
    });
});
