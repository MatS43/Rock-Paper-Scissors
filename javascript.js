function getComputerChoice(){
    let i = Math.floor(Math.random()*3)+1;
    if ( i === 1){
        return "rock"; 
    }
    else if (i === 2){
        return "paper";
    }
    else {
        return "scissors";
    }

}
function getHumanChoice(){
    let answer = prompt("Rock, Paper or Scissors").toLowerCase();
    return answer;
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        console.log(`You tie! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} is equal to ${computerChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "rock"){
        console.log(`You win! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice}!`);
        ++humanScore; 
    } else {
        console.log(`You lose! ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)} beats ${humanChoice}!`);
        ++computerScore;
    }
}
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);