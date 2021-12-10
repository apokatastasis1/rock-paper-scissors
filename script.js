    let computerScore = 0;
    let playerScore = 0;
    let playerSelection = playerChoice();
    let computerSelection = computerPlay();
    
    function game (){

        for(let i = 1; i<=5;i++){
            computerPlay();
            playerChoice();
            playRound(playerSelection, computerSelection);
        }
        
    }
    

    
    function playRound(playerSelection, computerSelection) {

        let roundResult;

        switch(playerSelection){
            case "rock":
                if(computerSelection==="rock") roundResult = "It's a tie";
                if(computerSelection==="paper") roundResult = "You lost";
                if(computerSelection==="scissors") roundResult = "You win";
                break;
            case "paper":
                if(computerSelection==="rock") roundResult = "You win";
                if(computerSelection==="paper") roundResult = "It's a tie";
                if(computerSelection==="scissors") roundResult = "You lost";
                break;
            case "scissors":
                if(computerSelection==="rock") roundResult = "You lost";
                if(computerSelection==="paper") roundResult = "You win";
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

  

   
