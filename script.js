'use strict';

//SecretNumber from 1 to 20
const secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
//Display the secret number on the screen
document.querySelector('.number').textContent = secretNumber;
//Check button click event
document.querySelector('.check').addEventListener('click', function () {
  //convert guess input value to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //If the guess input value is empty display this message
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } 
  //Else if the guess input value is equal to secretNumber then display this message on the screen
  else if(guess === secretNumber){
    document.querySelector('.message').textContent = 'Correct Number!';
    
  }
  // if guess input number is greater than the secret number display this message
  else if(guess > secretNumber){
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  // if guess input number is lower than the secret number display this message
  else if(guess < secretNumber){
    document.querySelector('.message').textContent ='Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  
});
