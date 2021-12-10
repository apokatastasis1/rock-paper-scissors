    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;

    game();
    
    function game (){

        for(let i = 1; i<=5;i++){
            playerSelection = playerChoice();
            computerSelection = computerPlay();
            roundResult = playRound(playerSelection, computerSelection);
            console.log(`Round: ${i} Computer: ${computerSelection}  Player: ${playerSelection} Round result: ${roundResult}`);

        }
        score(playerScore, computerScore);
        
    }

    function score(playerScore, computerScore){

        (playerScore>computerScore)? console.log(`You won the game \nPLAYER: ${playerScore} COMPUTER: ${computerScore}`) :
        (playerScore<computerScore)? console.log(`You lost the game \nPLAYER: ${playerScore} COMPUTER: ${computerScore}`) : 
        console.log(`It's a tie \nPLAYER: ${playerScore} COMPUTER: ${computerScore}`);


    }
    

    
    function playRound(playerSelection, computerSelection) {

        let roundResult;

        switch(playerSelection){
            case "rock":
                if(computerSelection==="rock") roundResult = "It's a tie";
                if(computerSelection==="paper") {
                    roundResult = "You lost";
                    computerScore++;

                }
                if(computerSelection==="scissors"){
                     roundResult = "You win";
                     playerScore++;
                }
                break;

            case "paper":
                if(computerSelection==="rock") {
                     roundResult = "You win";
                     playerScore++;
                }
                if(computerSelection==="paper") roundResult = "It's a tie";
                if(computerSelection==="scissors"){ 
                    roundResult = "You lost";
                    computerScore++;
                }
                break;
            case "scissors":
                if(computerSelection==="rock") {
                     roundResult = "You lost";
                     computerScore++;
                }
                if(computerSelection==="paper"){
                     roundResult = "You win";
                     playerScore++;
                }
                if(computerSelection==="scissors") roundResult = "It's a tie";
                break;
 
        }

        return roundResult;

        
        

        // your code here!
        //evaluates who wins
    }

    function computerPlay(){
        let weapons = ['rock', 'paper', 'scissors'];
        randomIndex = Math.floor(Math.random() * weapons.length);

        return weapons[randomIndex];

    }
  
    function playerChoice(){

    let choice;  

    do{

        choice = prompt("Choose rock, paper or scissors.").toLowerCase();

        if(choice !== "paper" && choice !== "rock" && choice !== "scissors") alert("Please enter a valid option.");

    }while(choice !== "paper" && choice !== "rock" && choice !== "scissors");

    return choice;


    }

    
    //console.log(playRound(playerSelection, computerSelection));

  

   
