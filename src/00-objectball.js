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

// function teamColors(inputTeamName) {
//   const game = gameObject();
//   for (const teams in game) {
//     const currentTeam = game[teams];
//     if (currentTeam.teamName === inputTeamName) {
//       return currentTeam.colors;
//     }
//   }
// }

//Build a function, teamNames, that operates on the game object to return an array of the team names.
function teamNames() {
  return [homeTeam().teamName, awayTeam().teamName];
}

// function teamNames(gameObj) {
//   const teamNames = [];
//   for (const teams in gameObj) {
//     const currentTeam = gameObj[teams];
//     teamNames.push(currentTeam.teamName);
//   }
//   return teamNames;
// }

//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
  const teamObject = awayTeam().teamName === teamName ? awayTeam() : homeTeam();
  const players = Object.entries(teamObject.players);
  return players.map(player => player[1].number);
}

// function playerNumbers(inputTeamName) {
//   const jearseyNumbers = [];
//   const game = gameObject();
//   for (const teams in game) {
//     const currentTeam = game[teams];
//     if (currentTeam.teamName === inputTeamName) {
//       const players = currentTeam.players;
//       for (const player in players) {
//         jearseyNumbers.push(players[player].number);
//       }
//     }
//   }
//   return jearseyNumbers;
// }

//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerInput) {
  return players()[playerInput];
}

// function playerStats(playerName) {
//   const game = gameObject();
//   for (const teams in game) {
//     const players = game[teams].players;
//     for (const player in players) {
//       if (player === playerName) {
//         return players[player];
//       }
//     }
//   }
// }

//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size.
function bigShoeRebounds() {
  const playersArray = Object.values(players());
  const biggestShoe = playersArray.reduce((a, b) => a.shoe > b.shoe ? a : b);
  return biggestShoe.rebounds;
}

// function bigShoeRebounds() {
//   const game = gameObject();
//   let largestShoe = -Infinity;
//   let playerPointer = {};
//   for (const teams in game) {
//     const players = game[teams].players;
//     for (const player in players) {
//       const currentShoe = players[player].shoe;
//       if (currentShoe > largestShoe) {
//         largetShoe = currentShoe;
//         playerPointer = players[player];
//       }
//     }
//   }
//   return playerPointer.rebounds;
// }

//Bonus questions:
//Which player has the most points? call function mostPointsScored
function mostPointsScored() {
  const playersArray = Object.entries(players());
  const playerWithMostPoints = playersArray.reduce((a, b) => a[1].points > b[1].points ? a : b);
  return playerWithMostPoints[0];
}

// function mostPointsScored(game) {
//   let mostPoints = 0;
//   let playerWithMostPoints;
//   for (const teams in game) {
//     const team = game[teams].players;
//     for (const player in team) {
//       if (team[player].points > mostPoints) {
//         mostPoints = team[player].points;
//         playerWithMostPoints = player;
//       }
//     }
//   }
//   return playerWithMostPoints;
// }

//Which team has the most points call function winningTeam
function winningTeam() {
  const homeTeamStats = Object.values(homeTeam().players);
  const awayteamStats = Object.values(awayTeam().players);
  const homePoints = homeTeamStats.reduce((a, b) => a + b.points, 0);
  const awayPoints = awayteamStats.reduce((a, b) => a + b.points, 0);
  return homePoints > awayPoints ? homeTeam().teamName : awayTeam().teamName;
}

// function winningTeam(game) {
//   let mostPoints = 0;
//   let winner;
//   for (const teams in game) {
//     let sumOfPlayerPoints = 0;
//     let players = game[teams].players;
//     for (const player in players) {
//       sumOfPlayerPoints += players[player].points;
//     }
//     if (sumOfPlayerPoints > mostPoints) {
//       mostPoints = sumOfPlayerPoints;
//       winner = game[teams].teamName;
//     }
//   }
//   return winner;
// }
//which player has the longest name? call function playerWithLongestName
function playerWithLongestName() {
  return Object.entries(players()).reduce((a,b) => a[0].length > b[0].length ? a : b)[0];
}

// function playerWithLongestName(game) {
//   let longestName;
//   let longestLength = 0;
//   for (const teams in game) {
//     const players = game[teams].players;
//     for (const player in players) {
//       if (player.length > longestLength) {
//         longestLength = player.length;
//         longestName = player;
//       }
//     }
//   }
//   return longestName;
// }

//SUPER BONUS!!!!!!!
//Write a function that returns true if the player with the longest name has the most steals
function doesLongNameStealATon(game) {
  let playerWithMostSteals;
  let steals = 0;
  for (const teams in game) {
    const players = game[teams].players;
    for (const player in players) {
      const currentPlayerSteals = players[player].steals;
      if (currentPlayerSteals > steals) {
        steals = currentPlayerSteals;
        playerWithMostSteals = player;
      }
    }
  }
  return playerWithMostSteals === playerWithLongestName(game);
}

const playersArray = [...Object.keys(gameObject().home.players), ...Object.keys(gameObject().away.players)];
const teams = teamNames();

function tester(array, tester) {
  for (const element of array) {
    console.log(tester(element));
  }
}