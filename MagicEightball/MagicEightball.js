//Step 1 Variable for Username
let uN = 'Robbyn';
//Step 2 Ternary Operator
uN ? console.log(`Hello, ${uN}`) : console.log('Hello!');

//Step 3 Variable for User Question
let uQ = 'Will I be a Millionaire?';
//Step 4 Logs User Question to the console
console.log(`${uN} asked: ${uQ}`);

//Step 5 Gets RANDOM NUMBER for ELSE IF Statement
let rN = Math.floor(Math.random() * 8);

//Step 6 Variable for Answers
let eB = '';

//Step 7 Conditional Statement for EightBall
if (rN === 0) {
  eB = 'You better believe it!';
} else if (rN === 1) {
  eB = 'Most certainly!';
} else if (rN === 2) {
  eB = 'Try again later.';
} else if (rN === 3) {
  eB = 'Cannot predict at this moment.';
} else if (rN === 4) {
  eB = 'Highly doubtful.'
} else if (rN === 5) {
  eB = 'That is a big fat no.';
} else if (rN === 6) {
  eB = 'Outlook sunny!';
} else if (rN === 7) {
  eB = 'Sure, you deserve it!';
} else {
  console.log('Error!')
}

//Step 8 Prints EightBall Answers to the console
console.log(eB);


//Step 9 Extra Practice
//Switch Statement
/*
switch (rN) {
  case 0:
    eB = 'You better believe it!';
    break;
  case 1:
    eB = 'Most certainly!';
    break;
  case 2:
    eB = 'Try again later.';
    break;
  case 3:
    eB = 'Cannot predict at this moment.';
    break;
  case 4:
    eB = 'Highly doubtful.';
    break;
  case 5:
    eB = 'That is a big fat no.';
    break;
  case 6:
    eB = 'Outlook suuny!';
    break;
  case 7:
    eB = 'Sure, You deserve it!';
    break;
  default:
    console.log('Error!');
}
// Prints EightBall Answers to the console
console.log(eB);
*/
