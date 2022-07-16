//Step 1
const team = {
  //Step 2.1
  _players: [
    //Step 3.1
    {
      firstName: 'Michael',
      lastName: 'Jordan',
      age: 59
    },
    //Step 3.2
    {
      firstName: 'Charles',
      lastName: 'Oakley',
      age: 58
    },
    //Step 3.3
    {
      firstName: 'Scottie',
      lastName: 'Pippen',
      age: 56
    }
  ],
  //Step 2.2
  _games: [
    //Step 4.1
    {
      opponent: 'Heats',
      teamPoints: 91,
      opponentPoints: 87
    },
    //Step 4.2
    {
      opponent: 'Celtics',
      teamPoints: 98,
      opponentPoints: 99 
    },
    //Step 4.3
    {
      opponent: 'Kings',
      teamPoints: 105,
      opponentPoints: 99 
    }
  ],
  //Step 5.1
  get players() {
    return this._players;
  },
  //Step 5.2
  get games() {
    return this._games;
  },
  //Step 6.1
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    //Step 6.2
    this.players.push(player);
  },
  //Step 8
  addGame(opponent, teamPoints, opponentPoints) {
    let games = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(games);
  }
}
//Step 7
team.addPlayer('Dennis', 'Rodman', 60);
team.addPlayer('Horace', 'Grant', 56);
team.addPlayer('Steve', 'Kerr', 56);

//Step 9
team.addGame('Suns', 83, 109);
team.addGame('Pacers', 83, 78);
team.addGame('Nuggets', 89, 74);


console.log(team.games);
console.log(team.players);
