const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    return computerChoice;
    
}

function getHumanChoice(){
    let validatedInput = false;
    while(validatedInput===false){
        const choice = prompt("Rock Paper Scissors");
        if(choice===null){
            continue;
        }
        const choiceInLowerCase = choice.toLowerCase();
        if(options.includes(choiceInLowerCase)){
            validatedInput = true;
            return choiceInLowerCase;
        }
    }
    
}

function checkWinner(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        return "Tie";
    }
    else if(
        (humanSelection==="rock" && computerSelection==="scissors") ||
        (humanSelection==="scissors" && computerSelection==="paper") ||
        (humanSelection==="paper" && computerSelection==="rock")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(humanSelection, computerSelection){
    const result = checkWinner(humanSelection, computerSelection);
    if(result === "Tie"){
        return `It's a tie! you both picked ${humanSelection}`;
    }
    else if(result === "Player"){
        return `You Win! ${humanSelection} beats ${computerSelection}`;
    }
    else{
        return `You lose! ${computerSelection} beats ${humanSelection}`;
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    for(i=0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
        console.log("--------------------------------------------");
        if(checkWinner(humanSelection, computerSelection) ==="Player"){
            humanScore++;
        }
        else if(checkWinner(humanSelection, computerSelection) ==="Computer"){
            computerScore++;
        }
    }
    console.log("Game Over!");
    if(humanScore>computerScore){
        console.log("Player wins!");
    }
    else if(humanScore<computerScore){
        console.log("Computer wins!");
    }
    else{
        console.log("It is a tie!");
    }

}

