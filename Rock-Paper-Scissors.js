function getComputerChoice() {
    let number =Math.floor(Math.random() * 100),Computerchoice;
    if (number >=0 && number <=34) {
        Computerchoice = "rock";
    }
    else if (number >=35 && number <=66) {
        Computerchoice = "paper";
    } 
    else {
        Computerchoice = "scissor";
    }
    return Computerchoice;
}
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissor" ) || (playerSelection == "scissor" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) 
    {
        result = "You Win! " + playerSelection +" beats " + computerSelection; 
        console.log(result);
        return result;   
    } 
    else if(playerSelection == computerSelection){
        result = "Draw!";
        console.log(result);
        return result;
    }
    else {
        result = "You Lose! " + computerSelection +" beats " + playerSelection;
        console.log(result);
        return result;
    }
  }
function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter between rock,paper,scissor");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        if (result == "You Win! " + playerSelection +" beats " + computerSelection) {
            playerWin_Count++;
        }
        else if(result == "You Lose! " + computerSelection +" beats " + playerSelection){
            computerWin_Count++;
        }
    }
    if (playerWin_Count > computerWin_Count) {
        console.log("You Win Match! Your score "+playerWin_Count+" computer score "+computerWin_Count+".");
    }
    else if(computerWin_Count > playerWin_Count){
        console.log("You Lose Match! Your score "+playerWin_Count+" computer score "+computerWin_Count+".")
    }
    else{
        console.log("Draw!Match");
    }
}
  let playerSelection,computerSelection
  let result,playerWin_Count = 0,computerWin_Count = 0;
  game();