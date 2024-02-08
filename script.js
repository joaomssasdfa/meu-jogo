// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {
    // Pegar o valor digitado pelo jogador
    const userGuess = parseInt(document.getElementById("guessField").value);
    attempts++;

    // Comparar o palpite do jogador com o número aleatório
    if (userGuess === randomNumber) {
        document.getElementById("message").innerHTML = `Parabéns! Você acertou o número em ${attempts} tentativas.`;
    } else if (userGuess < randomNumber) {
        document.getElementById("message").innerHTML = "Tente um número maior.";
    } else {
        document.getElementById("message").innerHTML = "Tente um número menor.";
    }
}
