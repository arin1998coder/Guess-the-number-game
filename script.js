'use strict';

const checkBtn = document.querySelector(".check");
const message = document.querySelector(".message");
let secretNo = Math.floor(Math.random()*20 + 1);
const score = document.querySelector(".score");
const againBtn = document.querySelector(".again");
const highScore = document.querySelector(".highscore");


let currHighScore = 0;
let currscore = 20;

const resetGame = () =>{
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = "";
    message.textContent='Start guessing...';
    score.textContent='20';
    document.querySelector("body").style.backgroundColor='#222';
    checkBtn.disabled = false;
    currscore = 20;
    secretNo = Math.floor(Math.random()*20 + 1);
    console.log(secretNo);

}

const displayScore = ()=>{
    score.textContent=currscore;
}

const gameWon = () =>{
    document.querySelector("body").style.backgroundColor='#60b347';
    checkBtn.disabled = true; //disable the button when user has guessed correct num
    document.querySelector(".number").style.width = '30rem';
    document.querySelector('.number').textContent = secretNo;

    //update highscore
    if(currscore>currHighScore){
        currHighScore = currscore;
        highScore.textContent=currHighScore;
    }
}

const gameLost = () =>{
    document.querySelector("body").style.backgroundColor='rgb(239, 55, 55)';
    checkBtn.disabled = true; //disable the button when user has guessed correct num
    document.querySelector(".number").style.width = '30rem';
    document.querySelector('.number').textContent = secretNo;
}

const greaterThanGuess = ()=>{
    currscore--;
    if(currscore<=0){
        message.textContent="You Lost...";
        currscore=0;
        gameLost();
    }
    else{
        message.textContent="Too High...";
    } 
    displayScore(); 
    
}

const lessThanGuess = ()=>{
    currscore--;
    if(currscore<=0){
        message.textContent="You Lost...";
        currscore=0;
        gameLost();
    }
    else{
        message.textContent="Too Low...";
    
    }
    displayScore(); 
    
}

const correctGuess = ()=>{
    message.textContent = "Correct Guess..."
    displayScore(); 
    gameWon();
}

//events on button click on "check button"
checkBtn.addEventListener("click", ()=>{
   const guess = Number(document.querySelector(".guess").value);

   if(!guess){
    if(currscore!==0)
        message.textContent = "⛔ No Number";
    displayScore(); 
   }
   else if(guess>secretNo) greaterThanGuess();

   else if(guess<secretNo) lessThanGuess();

   else correctGuess();

});

//press enter key after giving a numeric guess
document.querySelector('.guess').addEventListener('keypress', (event)=>{
    if(event.key==='Enter'){
        const guess = Number(document.querySelector(".guess").value);

        if(!guess){
         if(currscore!==0)
             message.textContent = "⛔ No Number";
         displayScore(); 
        }
        else if(guess>secretNo) greaterThanGuess();
     
        else if(guess<secretNo) lessThanGuess();
     
        else correctGuess();
    }
} );


//again button click -- reset the game
againBtn.addEventListener("click",resetGame);


