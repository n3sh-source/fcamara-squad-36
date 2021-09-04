var tentativa = 3;
function validar(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if ( email == "gustavo@fcamara.com" && password == "sanguelaranja"){
        alert ("Login bem-sucedido");
        window.location = "success.html";
        return false;
    }else{
        tentativa --;
        alert("Voce saiu "+tentativa+" tentativa;");
        if( attempt == 0){
            document.getElementById("input-email").disabled = true;
            document.getElementById("input-password").disabled = true;
            document.getElementById("botao").disabled = true;
            return false;
        }
    }
}