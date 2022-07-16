// The scope of `random` is too loose 


const getRandEvent = () => {
  //Step 11
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
  //Step 2
  let days;
  if (event === 'Marathon') {
    //Step 3.1
    days = 50;
  } else if (event === 'Triathlon') {
    //Step 3.2
    days = 100;
  } else if (event === 'Pentathlon') {
    //Step 3.3
    days = 200;
  }
  return days;
};

//Step 6
const name = 'Nala';
//Step 9.3
const name2 = 'Warren';

// The scope of `name` is too tight 
const logEvent = (/*Step 5.1->*/name/*<-Step 5.1*/, event) => {
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (/*Step 5.1->*/name/*<-Step 5.1*/, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
//Step 9.1
const event2 = getRandEvent();
const days = getTrainingDays(event);
//Step 9.2
const days2 = getTrainingDays(event);

// Define a `name` variable. Use it as an argument after updating logEvent and logTime 
logEvent(/*Step 7.1->*/name/*<-Step 7.1*/, event);
logTime(/*Step 7.1->*/name/*<-Step 7.1*/, days);
//Step 9.3
logEvent(name2, event2);
//Step 9.4
logTime(name2, days2);
