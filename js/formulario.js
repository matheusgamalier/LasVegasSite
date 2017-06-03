function somenteNumero(e) { // S� permite digitar n�meros em Telefone
    var tecla = (window.event) ? event.keyCode : e.which;
    if (tecla > 47 && tecla < 58)
        return true;
    else {
        if (tecla == 40 || tecla == 41 || tecla == 45)
            return true;
        else
            return false;
    }
}
function validacao() {
    if (document.getElementById('nome').value == "" || document.getElementById('telefone').value == "" || document.getElementById('email').value == "" || document.getElementById('obs').value == "")
    {
        if (document.getElementById('nome').value == "") //nome estiver em branco
        {
            alert("Pendente o campo de Nome");
        } 
        else if (document.getElementById('telefone').value == "") //telefone estiver em branco
        {
            alert("Pendente o campo de Telefone");
        } 
        else if (document.getElementById('email').value == "") //se email estiver em branco
        {
            alert("Pendente o campo de E-mail");
        }
         else if (document.getElementById('obs').value == "") //se email estiver em branco
        {
            alert("Pendente o campo de Descrição");
        } 
        return false;
    }
    alert("Formulário preenchido com sucesso! Iremos analisar sua mensagem e em breve retornamos com uma resposta.")
    return true;
}