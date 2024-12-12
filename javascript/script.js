window.onload = function() {
    closeOverlay();
}
        
        
// Função para mostrar a imagem grande sobre o conteúdo
function showImage(index) {
    // Imagens grandes (caminhos das imagens grandes)
    var images = [
        //imagens a serem usadas por ordem
        'imagens/galeria/g (1).webp',
        'imagens/galeria/g (2).webp',
        'imagens/galeria/g (3).webp',
        'imagens/galeria/g (4).webp',
        'imagens/galeria/g (5).webp',
        'imagens/galeria/g (6).webp',
        'imagens/galeria/g (7).webp',
        'imagens/galeria/g (8).webp',
        'imagens/galeria/g (9).webp',
        'imagens/galeria/g (10).webp',
        'imagens/galeria/g (11).webp',
        'imagens/galeria/g (12).webp'
    ];

    // Atribui a imagem grande ao src da imagem dentro do overlay
    var largeImage = document.getElementById('largeImage');
    largeImage.src = images[index];

    // Exibe o overlay
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}

// Função para fechar o overlay
function closeOverlay() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // Esconde o overlay
}

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function showEmail(){
    const email = document.getElementById('form5Example2').value
    const vali = validarEmail(email)

    if (vali){
        alert("Obrigado por subscrever!")
    }else {
        alert("Insira um email valido!")
    }
        
}

function obrigadoForm(){
    const name = document.getElementById('Nome').value
    const email = document.getElementById('Email').value
    const assunto = document.getElementById('Assunto').value
    const mens = document.getElementById('Mensagem').value
    const vali = validarEmail(email)

    if (name != "" && vali == true && assunto != "" && mens != ""){
        alert('Obrigado por nos contactar ' + name)
    }

        
}


    
