var userInput = 'scissors';
userInput = userInput.toLowerCase();

function getComputerChoice() {
  var computerChoice = Math.floor(Math.random()*2);
  switch (computerChoice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
                        }      
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'The game was a tie.';
  }
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'The user won.';
    }
  }
  
  if (userChoice === 'bomb') {
    return 'The user won.'
  }
}

function playGame() {
  var userChoice = userInput;
  var computerChoice = getComputerChoice();
  console.log('User choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();

