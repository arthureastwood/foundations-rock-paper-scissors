const humanScore = 0;
const computerScore = 0;

function getComputerChoice(cc) {
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

