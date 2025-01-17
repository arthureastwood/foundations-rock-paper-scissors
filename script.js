let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const cc = Math.floor(Math.random() * 3) + 1;
    if(cc === 1){
        return "rock";
    } else if( cc === 2){
        return "paper";
    } else if(cc === 3){
        return "scissors";
    }
    console.log(cc);  
}

function getHumanChoice(){
    const hc = prompt("The user can now play", '');
    if(hc === "rock"){
        return "rock";
    }
    else if(hc === "paper"){
        return "paper";
    }
    else if(hc === "scissors"){
        return "scissors";
    }
    console.log(hc);
}

function playRound(humanSelection, computerSelection){
    if(humanSelection === computerSelection){
        console.log(`It's a tie! you both picked ${humanSelection}`);
    }
    else if(humanSelection === "rock" && computerSelection === "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore++;
    }
    else if(humanSelection === "paper" && computerSelection === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if(humanSelection === "scissors" && computerSelection === "paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++;
    }
    else{
        console.log(`You lose! ${computerSelection} beats ${humanSelection}`);
        computerScore++;
    }

    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

