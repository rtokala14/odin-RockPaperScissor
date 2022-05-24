function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"]
    let selection = options[Math.floor(Math.random() * 3)]
    return selection
}

function playRound(playerSelection, computerSelection) {
    output = 0;
    if (equalsCaseInsensitive(playerSelection, "Rock")) {
        if (computerSelection === "Rock") {
            result.textContent = "Draw! Both chose Rock";
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'You Lose! Paper beats Rock';
            output = -1;
        }
        else {
            result.textContent = "You Win! Rock beats Scissor";
            output = 1;
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Paper")) {
        if (computerSelection === "Rock") {
            result.textContent = "You Win! Paper beats Rock";
            output = 1;
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'Draw! Both chose Paper';
        }
        else {
            result.textContent = "You Lose! Scissor beats Paper";
            output = -1;
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Scissor")) {
        if (computerSelection === "Rock") {
            result.textContent = "You Lose! Rock beats Scissor";
            output = -1;
        }
        else if (computerSelection === "Paper") {
            result.textContent = 'You Win! Scissor beats Paper';
            output = 1;
        }
        else {
            result.textContent = "Draw! You both chose Scissor";
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
const buttons = document.querySelectorAll("button");
const result = document.querySelector('#result');
const comp = document.querySelector('#compScore');
const play = document.querySelector('#playScore');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let out = playRound(button.id, computerPlay());
        if (out === 1) playScore+=1;
        if (out === -1) compScore+=1;
        comp.textContent = compScore.toString();
        play.textContent = playScore.toString();
        if (compScore === 5 || playScore === 5) {
            if (compScore === 5) result.textContent = "The Computer has won the series :(";
            else result.textContent = "YAYY!! You have beat the Computer!!";
            button.removeEventListener('click');
        }
    });
});