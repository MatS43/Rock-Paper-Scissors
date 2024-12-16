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


