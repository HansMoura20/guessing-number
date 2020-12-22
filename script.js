'use strict';

//SecretNumber from 1 to 20
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;


//Check button click event
document.querySelector('.check').addEventListener('click', function () {
  //convert guess input value to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } 
  //When player wins
  else if(guess === secretNumber){
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width= '30rem';
  }
  // When guess is too high
  else if(guess > secretNumber){

    if(score > 1){
      document.querySelector('.message').textContent = 'Too High!';
      //Decrease the score
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  }
  // When guess is too low
  else if(guess < secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent ='Too Low!';
      //Decrease the score
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      document.querySelector('.message').textContent = 'You lost the game!';
    }
    
  }
  
});

document.querySelector('.again').addEventListener('click', function() {
  //restore score to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  //reset secretNumber
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //reset number display
  document.querySelector('.number').textContent = '?'
  //reset guess input
  document.querySelector('.guess').value = '';
  //reset message
  document.querySelector('.message').textContent = 'Start guessing...'
  //reset body bg color
  document.querySelector('body').style.backgroundColor = '#222';
  //reset number width
  document.querySelector('.number').style.width= '15rem';
  
});
