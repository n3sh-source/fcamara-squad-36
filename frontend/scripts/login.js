const form = document.getElementById("form");
form.addEventListener("submit", (evento) => {
  try {
    evento.preventDefault();
    const dados = {
      email: form.elements[0].value,
      senha: form.elements[1].value,
    };
    fetch("http://localhost:3000/consultor/autenticacao", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    })
      .then(async (resposta) => {
        if (resposta.status == 200) {
          alert("Usuario Autenticado");
          resposta = await resposta.json();
          localStorage.setItem("consultor", JSON.stringify(resposta));
          window.location.href = "./index.html";
        } else {
          alert("Email e ou senha invalidos");
        }
      })
      .catch((error) => {
        alert("Email e ou senha invalidos");
      });
  } catch (error) {
    console.log(error);
  }
});
