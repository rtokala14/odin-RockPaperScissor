function computerPlay() {
    let options = ["Rock", "Paper", "Scissor"]
    let selection = options[Math.floor(Math.random() * 3)]
    return selection
}

function playRound(playerSelection, computerSelection) {
    output = "Invalid Entry"
    if (equalsCaseInsensitive(playerSelection, "Rock")) {
        if (computerSelection === "Rock") {
            output = "Draw! Both chose Rock"
        }
        else if (computerSelection === "Paper") {
            output = 'You Lose! Paper beats Rock'
        }
        else {
            output = "You Win! Rock beats Scissor"
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Paper")) {
        if (computerSelection === "Rock") {
            output = "You Win! Paper beats Rock"
        }
        else if (computerSelection === "Paper") {
            output = 'Draw! Both chose Paper'
        }
        else {
            output = "You Lose! Scissor beats Paper"
        }
    }
    else if (equalsCaseInsensitive(playerSelection, "Scissor")) {
        if (computerSelection === "Rock") {
            output = "You Lose! Rock beats Scissor"
        }
        else if (computerSelection === "Paper") {
            output = 'You Win! Scissor beats Paper'
        }
        else {
            output = "Draw! You both chose Scissor"
        }
    }
    return output
}

function game() {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i <= 5; i++) {
        let input = prompt("Please enter your selection (Rock, Paper, or Scissor):")
        computerSelection = computerPlay()
        alert(playRound(input, computerSelection))
    }
}

function equalsCaseInsensitive(text, other) {
    return text.localeCompare(other, undefined, {sensitivity: 'base'}) === 0
}

game()