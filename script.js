let score = 0;
let level = 1;

document.getElementById('shoot-button').addEventListener('click', function() {
    const randomOutcome = Math.random();
    const messageElement = document.getElementById('message');
    const scoreElement = document.getElementById('score');
    const levelElement = document.getElementById('level');

    if (randomOutcome < 0.5) {
        messageElement.textContent = "A gata gótica acertou a cesta com um arremesso perfeito!";
        score += 10; // Adiciona pontos por acerto
    } else {
        messageElement.textContent = "A gata gótica errou! Mas não desista, treine mais!";
        score = Math.max(0, score - 5); // Não deixar a pontuação abaixo de 0
    }

    scoreElement.textContent = "Pontuação: " + score;

    // Aumenta o nível a cada 50 pontos
    if (score >= 50) {
        level++;
        score = 0; // Reseta a pontuação ao subir de nível
        levelElement.textContent = "Nível: " + level;
        messageElement.textContent = "Parabéns! Você subiu para o Nível " + level + "!";
        
        // Altera a gata gótica em um novo nível
        changeCat();
    }
});

// Função para mudar a gata gótica
function changeCat() {
    const cats = document.querySelectorAll('.gothic-cat');
    cats.forEach(cat => cat.style.display = 'none'); // Esconde todas as gatas
    const currentCat = Math.min(level - 1, cats.length - 1); // Limita ao número de gatas disponíveis
    cats[currentCat].style.display = 'block'; // Mostra a gata correspondente ao nível
}
