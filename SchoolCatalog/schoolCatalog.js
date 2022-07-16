//Step 1
class School {
  //Step 2
  constructor(name, level, numberOfStudents) {
    //Step 3
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //Step 4.1
  get name() {
    return this._name;
  }

  //Step 4.2
  get level() {
    return this._level;
  }

  //Step 4.3
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //Step 5
  set numberOfStudents(students) {
    if (typeof students === number) {
      this._numberOfStudents = students;
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  //Step 6
  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} at the ${this._level} school level.`)
  }

  //Step 7
  static pickSubstituteTeacher(substituteTeachers) {
    let ranNum = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[ranNum];
  }
}

//Step 19.3
class SchoolCatalog {
  construstor(primary, middle, high) {
    this._primary = primary;
    this._middle = middle;
    this._high = high;
  }
  get primary() {
    return this._primary;
  }
  get middle() {
    return this._middle;
  }
  get high() {
    return this._high;
  }
}

//Step 8
class PrimarySchool extends School {
  //Step 9
  constructor(name, numberOfStudents, pickupPolicy) {
    //Step 10
    super(name, 'Primary', numberOfStudents);
    //Step 11
    this._pickupPolicy = pickupPolicy;
  }

  //Step 12
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//Step 19.1
class MiddleSchool extends School {
  constructor(name, numberOfStudents){
    super(name, 'Middle', numberOfStudents);
  }
}

//Step 13.1
class HighSchool extends School {
  //Step 13.2
  constructor(name, numberOfStudents, sportsTeams) {
    //Step 13.3
    super(name, 'High', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  
  //Step 13.4
  get sportsTeams() {
    console.log(this._sportsTeams);
  }
}

//Step 14
const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

//step 15
lorraineHansbury.quickFacts();

//Step 16
let sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
console.log(`The substitute teacher for the day is ${sub}`);

//Step 17
const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])

//Step 18
alSmith.sportsTeams;
