    function playRound(playerSelection, computerSelection) {
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

    let playerSelection = playerChoice();
    let computerSelection = computerPlay();
    //console.log(playRound(playerSelection, computerSelection));

  

   
