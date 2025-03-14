let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') result = 'You Lose';
    else if (computerMove === 'paper') result = 'You Win';
    else result = 'Tie';
  } 
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') result = 'You Win';
    else if (computerMove === 'paper') result = 'Tie';
    else result = 'You Lose';
  } 
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') result = 'Tie';
    else if (computerMove === 'paper') result = 'You Lose';
    else result = 'You Win';
  }

  if (result === 'You Win') score.wins += 1;
  else if (result === 'You Lose') score.losses += 1;
  else score.ties += 1;

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-image"><img src="images/${computerMove}-emoji.png"class="move-image">Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = 
    `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return 'rock';
  else if (randomNumber < 2 / 3) return 'paper';
  return 'scissors';
}






