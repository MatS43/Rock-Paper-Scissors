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
function playGame(){
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
    let round = 0;
    while(round < 5){
    playRound(getHumanChoice(), getComputerChoice());
    ++round;
    console.log(`Your score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
    }
    if (humanScore>computerScore){
        console.log("You won the game!")
    } else if (computerScore>humanScore){
        console.log("You lost the game!")
    } else {
        console.log("You tied with the computer!")
    }
}