
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    let roundResult;
//Selected elemntets for DOM manipulation
    let game = document.querySelector('.game');
    let rock = document.querySelector('.rock');
    let paper = document.querySelector('.paper');
    let scissors = document.querySelector('.scissors');
    let userChoice = document.querySelector('.user-choice');
    let computerChoice = document.querySelector('.computer-choice');
    let boardRoundResult = document.querySelector('.round-result');
    let boardMessage = document.querySelector('.board-message');
    let scorePlayer = document.querySelector('.score-user');
    let scoreComputer = document.querySelector('.score-computer');
    let modalResult = document.querySelector('.modal-result');
    let replayBtn = document.querySelector('.replay-btn');
    let modal = document.getElementById("myModal");
    let creator = document.querySelector('.apokatastasis');
    let replaySound = document.querySelector("#replay-sound");
    let intro = document.querySelector('.intro');
    let startButton = document.getElementById('start-button');
// Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];
    


//  close the modal
    span.onclick = function() {
    replaySound.play();
    modal.style.display = "none";
    game.style.display = "none";
    creator.style.display = "flex";
        
    }    



    rock.addEventListener('click', ()=> handleClick('rock'));
    paper.addEventListener('click', ()=> handleClick('paper'));
    scissors.addEventListener('click', ()=> handleClick('scissors'));
    replayBtn.addEventListener('click', replay);
    startButton.addEventListener('click', startGame);

    function startGame(){
        replaySound.play();
        game.style.display= 'flex';
        intro.style.display = 'none';
    }

    function replay(){
        
        
        replaySound.play();

        playerScore = 0;
        computerScore = 0;
        scorePlayer.textContent = 0;
        scoreComputer.textContent = 0;
        boardMessage.textContent = "";
        boardMessage.textContent = 'First to score 5 points wins!'
        boardRoundResult.textContent = "Choose your weapon!";
        modal.style.display = "none";
        userChoice.src = "./img/question-mark.png";
        computerChoice.src = "./img/question-mark.png";
    }

    function handleClick(selection){
        playSound();
        playerSelection = selection;
        computerSelection = computerPlay();
        swapChoice(selection);
        
        roundResult = playRound(playerSelection, computerSelection);
        boardRoundResult.textContent = roundResult;
        scorePlayer.textContent = playerScore;
        scoreComputer.textContent = computerScore;
        
        isGameOver();
        
        

    }

    function isGameOver(){
        if (playerScore===5 || computerScore ===5) {

            modal.style.display = "block";
            score();
                       
        };
        
    }




    //updates the image with the selected weapon
    function swapChoice(weapon){
            
            (weapon=='rock')? userChoice.src = "./img/rock.png":
            (weapon=='paper')? userChoice.src = "./img/paper.png":
            userChoice.src = "./img/scissors.png";

            (computerSelection=='rock')? computerChoice.src = "./img/rock.png":
            (computerSelection=='paper')? computerChoice.src = "./img/paper.png":
            computerChoice.src = "./img/scissors.png";


              
    }
   

   
    function playRound(playerSelection, computerSelection) {

        let roundResult;

        switch(playerSelection){
            case "rock":
                if(computerSelection==="rock") {
                    roundResult = "It's a tie";
                    boardMessage.textContent = 'try again!';    
                }
                if(computerSelection==="paper") {
                    roundResult = "You lost";
                    boardMessage.textContent = 'Paper beats rock!';
                    computerScore++;

                }
                if(computerSelection==="scissors"){
                     roundResult = "You win";
                     boardMessage.textContent = 'Rock beats scissors!';
                     playerScore++;
                }
                break;

            case "paper":
                if(computerSelection==="rock") {
                     roundResult = "You win";
                     boardMessage.textContent = 'Paper beats rock!';
                     playerScore++;
                }
                if(computerSelection==="paper") {

                    roundResult = "It's a tie";
                    boardMessage.textContent = 'try again!';
                }
                if(computerSelection==="scissors"){ 
                    roundResult = "You lost";
                    boardMessage.textContent = 'Scissors beats paper!';
                    computerScore++;
                }
                break;
            case "scissors":
                if(computerSelection==="rock") {
                     roundResult = "You lost";
                     boardMessage.textContent = 'Rock beats scissors!'
                     computerScore++;
                }
                if(computerSelection==="paper"){
                     roundResult = "You win";
                     boardMessage.textContent = 'Scissors beats paper!'
                     playerScore++;
                }
                if(computerSelection==="scissors") {
                    roundResult = "It's a tie";
                    boardMessage.textContent = 'try again!'
                }
                break;
 
        }

        return roundResult;


    }

    function computerPlay(){
        let weapons = ['rock', 'paper', 'scissors'];
        randomIndex = Math.floor(Math.random() * weapons.length);

        return weapons[randomIndex];

    }

    function score(){

        if(playerScore>computerScore){
            modalResult.textContent = "You won the game!";
        } else{
            modalResult.textContent = "You lost the game! Try again";
        }
        

    }

    function playSound(){
        const clickSound = document.querySelector("#click-sound")
        clickSound.play();
    }


    
