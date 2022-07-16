//Step 1
let sleepHours = day => {
  //Step 2
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 8;
  } else if (day === 'sunday') {
    return 8;
  } else {
    console.log('Error!!!');
  }
}

/*
Extra Practice Switch Statement
//Step 1
let sleepHours = days => {
//Step 2
  switch (days) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
    default: 
      console.log('Error!!!')
  }
}
*/

//Step 3
//console.log(getSleepHours('monday'));

//Step 4 & Step 12.1
let getActualSleepHours = () => /*Step 5*/ sleepHours = 8 + 8 + 8 + 7 + 9 + 9 + 9;

//Step 6 & Step 12.2
const getIdealSleepHours = idealHours => idealHours * 7;

/*
//Step 7
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
*/

//Step 8.1
const calculateSleepDebt = () => {
  //Step 8.2
  const actualSleepHours = getActualSleepHours();
  //Step 8.3 & Step 12.3
  const idealSleepHours = getIdealSleepHours(8);

  //Step 9.1
  if (actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep.`);
    //Step 9.2 & Step 10.2
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} more hour(s) sleep than needed. Go enjoy the day!`);
    //Step 9.3 & Step 10.1
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
}

//Step 11
calculateSleepDebt();
