function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: 'Charlote Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
}

function homeTeam() {
  return gameObject().home;
}

function awayTeam() {
  return gameObject().away;
}

function players() {
  return Object.assign({}, homeTeam().players, awayTeam().players);
}

//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored(playerInput) {
  return players()[playerInput].points;
}

//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
function shoeSize(playerInput) {
  return players()[playerInput].shoe;
}

//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors(teamInput) {
  return awayTeam().teamName === teamInput ? awayTeam().colors : homeTeam().colors;
}

//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName];
}

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
  const teamObject = awayTeam().teamName === teamName ? awayTeam() : homeTeam();
  const players = Object.entries(teamObject.players);
  return players.map(player => player[1].number);
}

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerInput) {
  return players()[playerInput];
}

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds() {
  const playersArray = Object.values(players());
  const biggestShoe = playersArray.reduce((a, b) => a.shoe > b.shoe ? a : b);
  return biggestShoe.rebounds;
}

//Bonus questions:
//Which player has the most points? call function mostPointsScored
function mostPointsScored() {
  const playersArray = Object.entries(players());
  const playerWithMostPoints = playersArray.reduce((a, b) => a[1].points > b[1].points ? a : b);
  return playerWithMostPoints[0];
}

//Which team has the most points call function winningTeam
function winningTeam() {
  const homeTeamStats = Object.values(homeTeam().players);
  const awayteamStats = Object.values(awayTeam().players);
  const homePoints = homeTeamStats.reduce((a, b) => a + b.points, 0);
  const awayPoints = awayteamStats.reduce((a, b) => a + b.points, 0);
  return homePoints > awayPoints ? homeTeam().teamName : awayTeam().teamName;
}

//which player has the longest name? call function playerWithLongestName
function playerWithLongestName() {
  return Object.entries(players()).reduce((a,b) => a[0].length > b[0].length ? a : b)[0];
}

//SUPER BONUS!!!!!!!
//Write a function that returns true if the player with the longest name has the most steals
function doesLongNameStealATon() {
  const playersArray = Object.entries(players());
  const playerWithMostSteals = playersArray.reduce((a, b) => a[1].steals > b[1].steals ? a : b);
  return playerWithMostSteals[0] === playerWithLongestName();
}

const playersArray = Object.keys(players());
const teams = teamNames();

function tester(array, tester) {
  for (const element of array) {
    console.log(tester(element));
  }
}