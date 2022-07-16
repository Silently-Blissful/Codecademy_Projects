//Step 1
let input = 'Terpentine and Turtles';

//Step 2
const vowels = ['a', 'e', 'i', 'o', 'u'];

//Step 3
const resultsArray = [];

//Step 4
for (let i = 0; i < input.length; i++) {
  /*Step 5
  console.log('i is ' + i);*/
  
  //Step 6
  for (let j = 0; j < vowels.length; j++) {
    /*Step 7
    console.log('j is ' + j);*/

  //Step 8
  if (input[i] === vowels[j]) {
    //Step 9
    resultsArray.push(input[i]);
  }
}
  //Step 10 & Step 11
  if (input[i] === 'e' || input[i] === 'u') {
    resultsArray.push(input[i]);
  }
};

//Step 12 & Step 13
console.log(resultsArray.join('').toUpperCase());
