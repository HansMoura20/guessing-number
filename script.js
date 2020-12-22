'use strict';

//SecretNumber from 1 to 20
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Check button click event
document.querySelector('.check').addEventListener('click', function () {
  //convert guess input value to Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number!');
  }
  //When player wins
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  //restore score to 20
  score = 20;
  document.querySelector('.score').textContent = score;
  //reset secretNumber
  secretNumber = Math.floor(Math.random() * 20) + 1;
  //reset number display
  document.querySelector('.number').textContent = '?';
  //reset guess input
  document.querySelector('.guess').value = '';
  //reset message
  displayMessage('Start guessing...');
  //reset body bg color
  document.querySelector('body').style.backgroundColor = '#222';
  //reset number width
  document.querySelector('.number').style.width = '15rem';
});
