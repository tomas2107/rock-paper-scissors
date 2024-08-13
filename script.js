function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerElection;
    if (randomNumber === 0) {
        computerElection = "Rock";
    } else if (randomNumber === 1) {
        computerElection = "Paper";
    } else {
        computerElection = "Scissors";
    }
    return computerElection;
}

function getHumanChoice() {
    let humanElection = prompt("What's your choice? (Rock,Paper,Scissors)");
    return humanElection;
}

function playRound(humanChoice, computerSelection) {
    humanChoice = humanChoice.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let messageResult;
    if (computerSelection === humanChoice) {
        return messageResult = "Tie!!";
    } else if (computerSelection === "ROCK" && humanChoice === "SCISSORS") {
        return messageResult = "You lose! Rock beats Scissors";
    } else if (computerSelection === "ROCK" && humanChoice === "PAPER") {
        return messageResult = "You win!, Paper beats Rock";
    } else if (computerSelection === "SCISSORS" && humanChoice === "PAPER") {
        return messageResult = "You lose!, Scissors beats paper";
    } else if (computerSelection === "SCISSORS" && humanChoice === "ROCK") {
        return messageResult = "You win!, Rock beatS Scissors";
    } else if (computerSelection === "PAPER" && humanChoice === "ROCK") {
        return messageResult = "You lose!,Paper beats Rock";
    } else if (computerSelection === "PAPER" && humanChoice === "SCISSORS") {
        return messageResult = "You win!, Scissors beats Paper";
    }

}
function playGame() {
    let output;
    let humanScore = 0;
    let computerScore = 0;
    let humanSelection;
    let computerSelection;
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log("the human choise is = " + humanSelection);
        console.log("The computer choice is : " + computerSelection);
        output = playRound(humanSelection, computerSelection);
        console.log("the result is " + output);
        if (output === "You win!, Scissors beats Paper" || output === "You win!, Rock beatS Scissors" || output === "You win!, Paper beats Rock") {
            humanScore++;
        } else if (output === "Tie!!") {

        } else {
            computerScore++;
        }
    }
    if (humanScore > computerScore) {
        return console.log("YOU WIN!!");
    } else if (humanScore < computerScore) {
        return console.log("You lose :c");

    } else {
        return console.log("It's a Tie");
    }


}
playGame();