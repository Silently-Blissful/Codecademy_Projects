//Step 1 & 2
//Temperature in Kelvin
const kelvin = 0; //Step 11 <- change number

//Step 3 & 4
//Temperature in Celsius converted from Kelvin
const celsius = kelvin - 273;

//Step 5 & 6
//Temperature in Fahrenheit converted from Celsius
let fahrenheit = celsius * (9/5) + 32;

//Step 7 & 8
//Round Fahrenheit decimal down
fahrenheit = Math.floor(fahrenheit);

//Step 12.1
//Temperature in Newton converted from Celsius
let newton = celsius * (33/100);

//Step 12.2
//Round Newton decimal down
newton = Math.floor(newton);

//Step extra
//Prints Temperature in Celsius
console.log(`The temperature is ${celsius} degrees Celsius.`);

//Step 9
//Prints Tempurature in Fahrenheit
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Step 10 Run program

//Step 12.3
//Prints Temperature in Newton
console.log(`The temperature is ${newton} degrees Newton.`);
