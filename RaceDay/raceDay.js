//Step 1
let rN = Math.floor(Math.random() * 1000);

//Step 2 & Step 8
let early = false;

//Step 3 & Step 8
let age = 30;

//Step 4
if (early && age > 18) {
  rN += 1000;
}

//Step 5
if (early && age > 18) {
  console.log(`Race begins at 9:30am. Your race number is ${rN}.`);
  //Step 6
} else if (!early && age > 18) {
  console.log(`Race begins at 11:00am. Your race number is ${rN}`);
  //Step 7
} else if (age < 18) {
  console.log(`Race begins at 12:30pm. Your race number is ${rN}`);
  //Step 9
} else {
  console.log('Please see registration desk.')
}
