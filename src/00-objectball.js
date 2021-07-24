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

function numPointsScored(inputPlayer) {
  const game = gameObject();
  for (const teams in game) {
    const team = game[teams].players;
    for (const player in team) {
      if (player === inputPlayer) {
        return `${inputPlayer} has scored ${team[player].points}`
      }
    }
  }
}

function shoeSize(inputPlayer) {
  const game = gameObject();
  for (const teams in game) {
    const team = game[teams].players;
    for (const player in team) {
      if (player === inputPlayer) {
        return `${inputPlayer}'s shoe size is ${team[player].shoe}`;
      }
    }
  }
}

function teamColors(inputTeamName) {
  const game = gameObject();
  for (const teams in game) {
    const currentTeam = game[teams];
    if (currentTeam.teamName === inputTeamName) {
      return currentTeam.colors;
    }
  }
}

function teamNames(gameObj) {
  const teamNames = [];
  for (const teams in gameObj) {
    const currentTeam = gameObj[teams];
    teamNames.push(currentTeam.teamName);
  }
  return teamNames;
}

function playerNumbers(inputTeamName) {
  const jearseyNumbers = [];
  const game = gameObject();
  for (const teams in game) {
    const currentTeam = game[teams];
    if (currentTeam.teamName === inputTeamName) {
      const players = currentTeam.players;
      for (const player in players) {
        jearseyNumbers.push(players[player].number);
      }
    }
  }
  return jearseyNumbers;
}

function playerStats(playerName) {
  const game = gameObject();
  for (const teams in game) {
    const players = game[teams].players;
    for (const player in players) {
      if (player === playerName) {
        return players[player];
      }
    }
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoe = -Infinity;
  let playerPointer = {};
  for (const teams in game) {
    const players = game[teams].players;
    for (const player in players) {
      const currentShoe = players[player].shoe;
      if (currentShoe > largestShoe) {
        largetShoe = currentShoe;
        playerPointer = players[player];
      }
    }
  }
  return playerPointer.rebounds;
}

//Bonus questions:
//Which player has the most points? call function mostPointsScored
function mostPointsScored(game) {
  let mostPoints = 0;
  let playerWithMostPoints;
  for (const teams in game) {
    const team = game[teams].players;
    for (const player in team) {
      if (team[player].points > mostPoints) {
        mostPoints = team[player].points;
        playerWithMostPoints = player;
      }
    }
  }
  return playerWithMostPoints;
}
//Which team has the most points call function winningTeam
function winningTeam(game) {
  let mostPoints = 0;
  let winner;
  for (const teams in game) {
    let sumOfPlayerPoints = 0;
    let players = game[teams].players;
    for (const player in players) {
      sumOfPlayerPoints += players[player].points;
    }
    if (sumOfPlayerPoints > mostPoints) {
      mostPoints = sumOfPlayerPoints;
      winner = game[teams].teamName;
    }
  }
  return winner;
}
//which player has the longest name? call function playerWithLongestName
function playerWithLongestName(game) {
  let longestName;
  let longestLength = 0;
  for (const teams in game) {
    const players = game[teams].players;
    for (const player in players) {
      if (player.length > longestLength) {
        longestLength = player.length;
        longestName = player;
      }
    }
  }
  return longestName;
}

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

const players = [...Object.keys(gameObject().home.players), ...Object.keys(gameObject().away.players)];
const teams = teamNames(gameObject());

function tester(array, tester) {
  for (const element of array) {
    console.log(tester(element));
  }
}