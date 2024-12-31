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
function showScore(humanScore, computerScore){
    score.textContent = `Wins ${humanScore} Loses ${computerScore}`;
}
function showAction(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        action.textContent=`You tie! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} is equal to ${computerChoice}!`;
    } else if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "rock"){
        action.textContent=`You win! ${humanChoice[0].toUpperCase()}${humanChoice.substring(1)} beats ${computerChoice}!`;
    } else {
        action.textContent=`You lose! ${computerChoice[0].toUpperCase()}${computerChoice.substring(1)} beats ${humanChoice}!`;
    }
}
let humanScore = 0;
let computerScore = 0;
let btnr= document.querySelector("#rock");
let btnp = document.querySelector("#paper");
let btns = document.querySelector("#scissors")
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
    showScore(humanScore, computerScore);
    showAction(humanChoice, computerChoice);
    if (humanScore>=5 && computerScore<5){
        score.textContent="You win the game";
        humanScore=0;
        computerScore=0;
    }else if(computerScore>=5 && humanScore<5){
        score.textContent="You lose the game";
        humanScore=0;
        computerScore=0;
    }
}
btnr.addEventListener("click", () =>playRound("rock", getComputerChoice()));
btnp.addEventListener("click", () =>playRound("paper", getComputerChoice()));
btns.addEventListener("click", () =>playRound("scissors", getComputerChoice()));
let score = document.querySelector("#score");
score.textContent = `Wins 0 Loses 0`
let action = document.querySelector("#action");
action.textContent="``````"
