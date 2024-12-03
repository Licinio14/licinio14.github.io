        
        
        
        window.onload = function() {
                closeOverlay();
        }
        
        
        // Função para mostrar a imagem grande sobre o conteúdo
        function showImage(index) {
            // Imagens grandes (caminhos das imagens grandes)
            var images = [
                'imagens/main/e (1).webp', 
                'imagens/main/e (2).webp', 
                'imagens/main/e (3).webp',
                'imagens/main/licinio.jpg'
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