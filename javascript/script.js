        window.onload = function() {
                closeOverlay();
        }
        
        
        // Função para mostrar a imagem grande sobre o conteúdo
        function showImage(index) {
            // Imagens grandes (caminhos das imagens grandes)
            var images = [
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
                
                // Adicione mais imagens conforme necessário
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
    
