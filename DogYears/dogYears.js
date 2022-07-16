//Step 1
//Age in human years
const myAge = 36;

//Step 2
//Early years
let earlyYears = 2;

//Step 3
earlyYears *= 10.5;
//Step 10.1 earlyYears = earlyYears * 10.5;

//Step 4
//Later years
let laterYears = myAge - 2;

//Step 5
//Multiply to account for later years
laterYears *= 4;
//Step 10.2 laterYears = laterYears * 4;

//Step 6
//console.log(earlyYears);
//console.log(laterYears);

//Step 7
//Age in dog years
const myAgeInDogYears = earlyYears + laterYears;

//Step 8
//Lowercase
const myName = 'Robbyn'.toLowerCase();

//Step 9
//Prints ages
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
