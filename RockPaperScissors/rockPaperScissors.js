//Step 1
const userChoice = userInput => {
  //Step 2
  userInput = userInput.toLowerCase();
  //Step 3
  return userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || /*Step 14.1->*/userInput === 'bomb'/*<-Step 14.1*/ ? userInput : console.log('!!!ERROR!!!');
};

/*
Step 4
console.log(userChoice('rock'));
console.log(userChoice('banana'));
*/

//Step 5
const compChoice = () => {
  //Step 5.1
  let num = Math.floor(Math.random() * 3);
  //Step 5.2
  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper';
  } else if (num === 2) {
    return 'scissors';
  } else {
    console.log('!!!ERROR!!!');
  }
};

/*
Extra Practice Switch Statement
const compChoice = () => {
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('!!!ERROR!!!');
  }
};
*/

/*
Step 6
console.log(compChoice());
*/

//Step 7
const winner = (user, comp) => {
  //Step 7.2
  if (user === comp) {
    return 'Tied!';
  }
  //Step 14.2
  if (user === 'bomb') {
    return 'You Won!'
  }
  //Step 8
  if (user === 'rock') {
    return comp === 'paper' ? 'Comp Won!' : 'You Won!';
  }
  //Step 9
  if (user === 'paper') {
    return comp === 'scissors' ? 'Comp Won!' : 'You Won!';
  }
  //Step 10
  if (user === 'scissors') {
    return comp === 'rock' ? 'Comp Won!' : 'You Won!';
  }
};

/*
Step 11
console.log(winner('paper', 'scissors'));
console.log(winner('paper', 'paper'));
console.log(winner('paper', 'rock'));
*/

//Step 12
const play = () => {
  //Step 12.1
  let uC = userChoice('bomb');
  //Step 12.2
  let cC = compChoice('rock');
  //Step 12.3
  console.log(`You threw: ${uC}`);
  console.log(`Comp threw: ${cC}`)
  //Step 13.1
  console.log(winner(uC, cC));
}

//Step 13.2
play();
