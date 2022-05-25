function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"]
    let selection = options[Math.floor(Math.random() * 3)]
    return selection
}

function playRound(playerSelection, computerSelection) {
    compImg.src = "/images/" + computerSelection.toLowerCase() + ".png";
    playImg.src = "/images/" + playerSelection.toLowerCase() + ".png";
    output = 0;
    if (equalsCaseInsensitive(playerSelection, "Rock")) {
        if (computerSelection === "Rock") {
            result.textContent = "Draw!";
            subResult.textContent = "Both chose Rock";
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'You Lose!';
            subResult.textContent = 'Paper beats Rock';
            output = -1;
        }
        else {
            result.textContent = "You Win!";
            subResult.textContent =  "Rock beats Scissor";
            output = 1;
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Paper")) {
        if (computerSelection === "Rock") {
            result.textContent = "You Win!";
            subResult.textContent = "Paper beats Rock";
            output = 1;
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'Draw!';
            subResult.textContent =  'Both chose Paper';
        }
        else {
            result.textContent = "You Lose!";
            subResult.textContent =  "Scissor beats Paper";
            output = -1;
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Scissor")) {
        if (computerSelection === "Rock") {
            result.textContent = "You Lose!";
            subResult.textContent =  "Rock beats Scissor";
            output = -1;
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'You Win!';
            subResult.textContent =  'Scissor beats Paper';
            output = 1;
        }
        else {
            result.textContent = "Draw!";
            subResult.textContent =  "You both chose Scissor";
        }
    }
    return output
}

/*function game() {
    let playerScore = 0
    let computerScore = 0
    
}*/

function equalsCaseInsensitive(text, other) {
    return text.localeCompare(other, undefined, {sensitivity: 'base'}) === 0
}

let compScore = 0;
let playScore = 0;
const buttons = document.querySelectorAll(".button");
const result = document.querySelector('.scoreLine');
const subResult = document.querySelector('.subScore')
const comp = document.querySelector('#compScore');
const play = document.querySelector('#playScore');
const compImg = document.querySelector('.computer-hand');
const playImg = document.querySelector('.player-hand');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (compScore === 5 || playScore === 5) {
            endGame();
        }
        else {
            let out = playRound(button.id, computerPlay());
            if (out === 1) playScore+=1;
            if (out === -1) compScore+=1;
            comp.textContent = "Computer: " + compScore.toString();
            play.textContent = "Player: " + playScore.toString();
        }
    });
});