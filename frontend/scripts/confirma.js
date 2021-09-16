const confirmar = document.getElementById("confirmar");
confirmar.addEventListener("click", (evento) => {
  try {
    const codigo = document.getElementById("codigo");
    const dados = { codigo: codigo.value };

    fetch("http://localhost:3000/reserva/confirmacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then(async (resposta) => {
        if (resposta.status == 200) {
          window.location.href = "tela-final.html";
        } else {
          resposta = await resposta.json();
          alert(resposta.error);
        }
      })
      .catch((error) => {
        alert("Houve um erro ao confirmar o agendamento");
      });
  } catch (error) {
    console.log(error);
  }
});
