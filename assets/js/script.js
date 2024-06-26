// função de troca de imagem do menu e responsividade
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

function copyButton() {
    document.getElementById("copyButton").addEventListener("click", function() {
        // Seleciona o email
        var email = "lucas10besilva@gmail.com";
        
        // Cria um elemento de input temporário
        var input = document.createElement("input");
        input.setAttribute("value", email);
        document.body.appendChild(input);
        
        // Seleciona o texto do input
        input.select();
        
        // Copia o texto para a área de transferência
        document.execCommand("copy");
        
        // Remove o input temporário
        document.body.removeChild(input);
        
        // Alerta o usuário que o email foi copiado
        alert("O email foi copiado para a área de transferência: " + email);
      });
}

function whatsappButton() {
    document.getElementById("whatsappButton").addEventListener("click", function() {
        // Número de telefone para iniciar a conversa no WhatsApp (incluindo o código do país)
        var telefone = "5513988313339"; // Substitua por seu número de telefone
        
        // Mensagem inicial opcional
        var mensagem = "Olá, tudo bem?";
        
        // Cria o link para iniciar a conversa no WhatsApp
        var link = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem);
        
        // Redireciona o usuário para o link do WhatsApp
        window.open(link, '_blank');
      });
}
