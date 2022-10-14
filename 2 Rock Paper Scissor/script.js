
const totalScore = { computerScore: 0, playerScore: 0 };

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  let rand = Math.floor(Math.random() * choices.length);
  return choices[rand];
}

function getResult(playerChoice, computerChoice) {

  let score;
  if (playerChoice == computerChoice) {
    score = 0;
  } else if ((playerChoice == 'Rock' && computerChoice == 'Scissors') ||
    (playerChoice == 'Paper' && computerChoice == 'Rock') ||
    (playerChoice == 'Scissors' && computerChoice == 'Paper')) {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  if (score == -1) {
    resultDiv.innerText = '🏳️ You Lose ! 😭'
  } else if (score == 0) {
    resultDiv.innerText = "😅 It's a tie ! 😑"
  } else {
    resultDiv.innerText = '🙌🎯 You Won ! 🏆🥇'
  }

  handsDiv.innerText = `👱${playerChoice}  vs  🤖${computerChoice}`;
  playerScoreDiv.innerText = `Your Score : ${totalScore['playerScore']} \n 
                              Computer Score :${totalScore['computerScore']}`
}

function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice, computerChoice);
  totalScore['playerScore'] += score;
  totalScore['computerScore'] -= score;
  showResult(score, playerChoice, computerChoice)

}

function playGame() {

  const rpsButtons = document.querySelectorAll('.rpsButton');
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  })
  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame();

}

function endGame() {
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  const resultDiv = document.getElementById('result');
  const handsDiv = document.getElementById('hands');
  const playerScoreDiv = document.getElementById('player-score');

  resultDiv.innerText = '';
  handsDiv.innerText = '';
  playerScoreDiv.innerText = ''

}

playGame()