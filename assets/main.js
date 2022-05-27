/*choose Best of */

const bestOf3=document.querySelector('#bestOf3')
const bestOf5=document.querySelector('#bestOf5')
const bestOf7=document.querySelector('#bestOf7')
const chosenBestOf=document.querySelector('#bestOf')
// eventListener
bestOf3.addEventListener('click', set3Active)
bestOf5.addEventListener('click', set5Active)
bestOf7.addEventListener('click', set7Active)

document.querySelector('#bestOf3Again').addEventListener('click',again3)

document.querySelector('#bestOf5Again').addEventListener('click',again5)

document.querySelector('#bestOf7Again').addEventListener('click',again7)

let gameTyp=0;

function set3Active() {
    bestOf3.classList.remove('active')
    bestOf5.classList.remove('active')
    bestOf7.classList.remove('active')
    bestOf3.classList.add('active')
    chosenBestOf.innerText = 'We are playing a best of 3'
    gameTyp=3;
 

    document.querySelector('#selectVariantFirst').classList.add('hidden')
    document.querySelector('#chooseHand').classList.remove('hidden')
    document.querySelector('#bestOfSelection').classList.add('hidden')
}

function set5Active() {
    bestOf5.classList.remove('active')
    bestOf3.classList.remove('active')
    bestOf7.classList.remove('active')
    bestOf5.classList.add('active')
    chosenBestOf.innerText = 'We are playing a best of 5'
    gameTyp=5;

    document.querySelector('#selectVariantFirst').classList.add('hidden')
    document.querySelector('#chooseHand').classList.remove('hidden')

    document.querySelector('#bestOfSelection').classList.add('hidden')
  
}

function set7Active() {
    bestOf7.classList.remove('active')
    bestOf3.classList.remove('active')
    bestOf5.classList.remove('active')
    bestOf7.classList.add('active')
    chosenBestOf.innerText = 'We are playing a best of 7'
    gameTyp=7;


    document.querySelector('#selectVariantFirst').classList.add('hidden')
    document.querySelector('#chooseHand').classList.remove('hidden')
   
    document.querySelector('#bestOfSelection').classList.add('hidden')
}

function showDefault(){
  
    document.querySelector('#default').classList.remove('hidden')
    document.querySelector('#result').innerText =""

    document.querySelector('#playerPlaceholder').classList.toggle('hidden')
    document.querySelector('#playerRock').classList.add('hidden')
    document.querySelector('#playerPaper').classList.add('hidden')
    document.querySelector('#playerScissor').classList.add('hidden')

    document.querySelector('#computerPlaceholder').classList.toggle('hidden')
    document.querySelector('#computerRock').classList.add('hidden')
    document.querySelector('#computerPaper').classList.add('hidden')
    document.querySelector('#computerScissor').classList.add('hidden')

    rock.classList.remove('active')
    paper.classList.remove('active')
    scissor.classList.remove('active')
    
    gameOverCheck=false
    
}

function again3(){
    set3Active()
    document.querySelector('#winner').classList.add('hidden')
    document.querySelector('#loser').classList.add('hidden')
    document.querySelector('#chooseToPlayAgain').classList.add('hidden')
    showDefault()

}

function again5(){
    set5Active()
    document.querySelector('#winner').classList.add('hidden')
    document.querySelector('#loser').classList.add('hidden')
    document.querySelector('#chooseToPlayAgain').classList.add('hidden')
    showDefault()
}

function again7(){
    set7Active()
    document.querySelector('#winner').classList.add('hidden')
    document.querySelector('#loser').classList.add('hidden')
    document.querySelector('#chooseToPlayAgain').classList.add('hidden')
    showDefault()

}
/* Score */
let playerScore=0;
let computerScore=0;
let savePlayerScore=0;
let saveComputerScore=0;
let gameOverCheck=false;

document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

function updateScore(){
    document.querySelector('#playerScore').innerText = playerScore
    document.querySelector('#computerScore').innerText = computerScore
}

function gameOver(){
    if (gameTyp===3) {
        if(playerScore===2){
            document.querySelector('#winner').classList.remove('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.add('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
    saveComputerScore=computerScore
    playerScore=0
    computerScore=0
        
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }
        else if (computerScore===2){
            document.querySelector('#winner').classList.add('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.remove('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
    saveComputerScore=computerScore
    playerScore=0
    computerScore=0
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }

    }

    if (gameTyp===5) {
        if(playerScore===3){
            document.querySelector('#winner').classList.remove('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.add('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
            saveComputerScore=computerScore
            playerScore=0
            computerScore=0
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }
        else if (computerScore===3){
            document.querySelector('#winner').classList.add('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.remove('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
            saveComputerScore=computerScore
            playerScore=0
            computerScore=0
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }
    }

    if (gameTyp===7) {
        if(playerScore===4){
            document.querySelector('#winner').classList.remove('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.add('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
            saveComputerScore=computerScore
            playerScore=0
            computerScore=0
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }
        else if (computerScore===4){
            document.querySelector('#winner').classList.add('hidden')
            document.querySelector('#default').classList.add('hidden')
            document.querySelector('#loser').classList.remove('hidden')
            gameOverCheck=true;
            savePlayerScore=playerScore
            saveComputerScore=computerScore
            playerScore=0
            computerScore=0
            document.querySelector('#playerScore').innerText = playerScore
document.querySelector('#computerScore').innerText = computerScore

        }
    }
    
}

function showResult(){
    if(gameOverCheck===true){
        document.querySelector('#result').innerHTML = `The Final Score of the game was </br> Player: ${savePlayerScore}  Computer: ${saveComputerScore}`
    }
}

function askForRestart(){
    if(gameOverCheck===true){
        document.querySelector('#chooseHand').classList.add('hidden')
        document.querySelector('#wannaRestart').classList.remove('hidden')
        gameOverCheck===false;
    }
}

function playAgain(){
    document.querySelector('#wannaRestart').classList.add('hidden')
    document.querySelector('#chooseToPlayAgain').classList.remove('hidden')
}

function thanksForPlaying(){
    document.querySelector('#wannaRestart').classList.add('hidden')
    document.querySelector('#thanksForPlaying').classList.remove('hidden')
}

/*Play a Hand*/
let playerHand;
let computerHand;

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')

const playerRock = document.querySelector('#playerRock')
const playerPaper = document.querySelector('#playerPaper')
const playerScissor = document.querySelector('#playerScissor')
const playerPlaceholder = document.querySelector('#playerPlaceholder')

const computerRock = document.querySelector('#computerRock')
const computerPaper = document.querySelector('#computerPaper')
const computerScissor = document.querySelector('#computerScissor')
const computerPlaceholder = document.querySelector('#computerPlaceholder')


// event Listener
rock.addEventListener('click', setRock)
paper.addEventListener('click', setPaper)
scissor.addEventListener('click', setScissor)

document.querySelector('#yesPlayAgain').addEventListener('click', playAgain)
document.querySelector('#noPlayAgain').addEventListener('click', thanksForPlaying)

function setRock() {
    rock.classList.remove('active')
    paper.classList.remove('active')
    scissor.classList.remove('active')
    rock.classList.add('active')
    playerRock.classList.remove('hidden')
    playerPlaceholder.classList.add('hidden')
    playerPaper.classList.add('hidden')
    playerScissor.classList.add('hidden')
    
    playerHand='rock'
    console.log("Player:"+playerHand)
    
    computerRoll()
    checkGame()
    updateScore()
    gameOver()
    showResult()
    askForRestart()
    
    
    
    

}

function setPaper() {
    paper.classList.remove('active')
    rock.classList.remove('active')
    scissor.classList.remove('active')
    paper.classList.add('active')

    playerRock.classList.add('hidden')
    playerPlaceholder.classList.add('hidden')
    playerPaper.classList.remove('hidden')
    playerScissor.classList.add('hidden')
    
    playerHand='paper';
    console.log("Player:"+playerHand)
    
    computerRoll()
    checkGame()
    updateScore()
    gameOver()
    showResult()
    askForRestart()
    


}

function setScissor() {
    scissor.classList.remove('active')
    rock.classList.remove('active')
    paper.classList.remove('active')
    scissor.classList.add('active')

    playerRock.classList.add('hidden')
    playerPlaceholder.classList.add('hidden')
    playerPaper.classList.add('hidden')
    playerScissor.classList.remove('hidden')
    playerHand='scissor';
    console.log("Player:"+playerHand)
    
    computerRoll();

    checkGame()
    updateScore()
    gameOver()
    showResult()
    askForRestart()
}


function computerRoll(){
let play;
let x=Number((Math.floor(Math.random()*3)));
if(x==0){
    computerRock.classList.remove('hidden')
    computerPlaceholder.classList.add('hidden')
    computerScissor.classList.add('hidden')
    computerPaper.classList.add('hidden')
    computerHand='rock'
    return console.log("pc: "+computerHand)
}
if(x==1){
    computerRock.classList.add('hidden')
    computerPlaceholder.classList.add('hidden')
    computerScissor.classList.add('hidden')
    computerPaper.classList.remove('hidden')
    computerHand='paper'
    return console.log("pc: "+computerHand)
}
if(x==2) {
    computerRock.classList.add('hidden')
    computerPlaceholder.classList.add('hidden')
    computerScissor.classList.remove('hidden')
    computerPaper.classList.add('hidden')
    computerHand='scissor'
    return console.log("pc: "+computerHand)
}
}

function checkGame(){
if(playerHand==='rock') {
    if (computerHand==='rock'){
        document.querySelector('#result').innerText = "Try again this round is a draw"
    }
    if(computerHand==='scissor'){
        document.querySelector('#result').innerText = "Congratulation you won this round"
        playerScore+=1;
    }
    if(computerHand==='paper'){
        document.querySelector('#result').innerText = "Sorry you lost this round"
        computerScore+=1
    }
}else if(playerHand==='paper'){
    if (computerHand==='rock'){
        document.querySelector('#result').innerText = "Congratulation you won this round"
        playerScore+=1;
     }
     if(computerHand==='scissor'){
        document.querySelector('#result').innerText = "Sorry you lost this round"
         computerScore+=1
     }
     if(computerHand==='paper'){
        document.querySelector('#result').innerText = "Try again this round is a draw"
     }
}

else if(playerHand==='scissor'){
    if (computerHand==='rock'){
        document.querySelector('#result').innerText = "Sorry you lost this round"
        computerScore+=1
     }
     if(computerHand==='scissor'){
        document.querySelector('#result').innerText = "Try again this round is a draw"
     }
     if(computerHand==='paper'){
        document.querySelector('#result').innerText = "Congratulation you won this round"
         playerScore+=1;
     }
}

}

