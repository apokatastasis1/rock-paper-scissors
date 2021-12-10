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
        choice = prompt("Choose rock, paper or scissors.")
        return choice;

    }

    let playerSelection = playerChoice();
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));

  

   
