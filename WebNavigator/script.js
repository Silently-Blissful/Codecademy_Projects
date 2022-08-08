const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
//Step 1.1
const backPages = new Stack();
//Step 1.2
const nextPages = new Stack();
//Step 2
let currentPage = 'My Start Space';

// ------------------------------
// Helper Functions
// ------------------------------
//Step 3
const showCurrentPage = (action) => {
  console.log(`\n${action}`);
  console.log(`Current page = ${currentPage}`);
  console.log('Back page = ', backPages.peek());
  console.log('Next page = ', nextPages.peek());
}

//Step 4
newPage = (page) => {
  backPages.push(currentPage);
  currentPage = page;
  //Clear nextPages stack
  while (!nextPage.isEmpty()) {
    nextPages.pop();
  }
  showCurrentPage('New: ');
}

//Step 5
backPage = () => {
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('Back: ');
}

//Step 6
nextPage = () => {
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage('Next: ');
}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
//Step 7
let finish = false;
//Step 8.1
let showBack = false;
//Step 8.2
let showNext = false;
//Step 9
showCurrentPage('Default: ');
//Step 10
while (finish === false) {
  //Step 11.1
  let instructions = baseInfo;
  //Step 11.2
  if (backPages.peek() != null) {
    instructions = `${instructions}, ${backInfo}`;
    //Step 11.3
  } else {
    showBack = false;
  }
  //Step 12.1
  if (nextPages.peek() != null) {
    instructions = `${instructions}, ${nextInfo}`;
    //Step 12.2
  } else {
    showNext = false;
  }
  //Setp 13
  instructions = `${instructions}, ${quitInfo}`;
  console.log(instructions);
}

  // ------------------------------
  // User Interface Part 2
  // ------------------------------
  //Step 14.1
  let response = prompt('How are you today?');
  //Step 14.2
  let answer = prompt(question);
  //Step 15
  let lowerCaseAnswer = answer.toLowerCase();

  //Step 16
  if ((lowerCaseAnswer !== 'n') && (lowerCaseAnswer !== 'b') && (lowerCaseAnswer !== 'q')) {
    newPage(answer);
    //Step 17.1
  } else if ((showNext === true) && (lowerCaseAnswer === 'n')) {
    nextPage();
    //Step 17.2
  } else if ((showback === true) && (lowerCaseAnswer === 'b')) {
    backPage();
    //Step 18.1
  } else if (lowerCaseAnswer === 'b') {
    console.log('Cannot go back a page. Stack is empty.');
    //Step 18.2
  } else if (lowerCaseAnswer === 'n') {
    console.log('Cannot go to the next page. Stack is empty.');
    //Step 19
  } else if (lowerCaseAnswer === 'q') {
    finish = true;
  }
  
