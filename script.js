function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    let computerElection;
    if(randomNumber === 0){
        computerElection = "Rock";
    }else  if(randomNumber === 1){
        computerElection = "Paper";
    }else{
        computerElection = "Scissors";
    }
    return computerElection;
}

function getHumanChoice(){
    let humanElection = prompt("What's your choice? (Rock,Paper,Scissors)");
    return humanElection;
}

let humanScore = 0;
let computerScore = 0;
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
function playRound(humanChoice,computerChoice){
    humanChoice.toUpperCase();
    computerChoice.toUpperCase();
    let message;
    if(computerChoice === humanChoice){
        message ="Tie!!";
    }else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
        message = "You lose! Rock beats Scissors";
    }else if(computerChoice === "ROCK" && humanChoice ==="PAPER"){
        message = "You win!!,Paper beats rock";
    }else if(computerChoice === "SCISSORS" && humanChoice === "PAPER"){
        message = "You lose!,Scissors beats paper";
    }else if (computerChoice === "SCISSORS" && humanChoice === "ROCK"){
        message = "You win! Rock beat Scissors";
    }else if(computerChoice === "PAPER" && humanChoice === "ROCK"){
        message = "You lose!,Paper beats Rock";
    }else if (computerChoice === "PAPER" && humanChoice === "SCISSORS"){
        message = "You win! Scissors beats Paper";
    }
    return message;
}
let output =playRound(humanSelection,computerSelection);
console.log(output);