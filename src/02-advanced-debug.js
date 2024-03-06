console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()

function numPointsScored(playerName) {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  for (let player in home.players) {
    if (player === playerName) {
      return home.players[player].points;
    }
  }

  for (let player in away.players) {
    if (player === playerName) {
      return away.players[player].points;
    }
  }

  return "Player not found";
}

function shoeSize(playerName) {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  for (let player in home.players) {
    if (player === playerName) {
      return home.players[player].shoe;
    }
  }

  for (let player in away.players) {
    if (player === playerName) {
      return away.players[player].shoe;
    }
  }


  return "Player not found";
}

function teamColors(teamName) {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  if (home.teamName === teamName) {
    return home.colors;
  } else if (away.teamName === teamName) {
    return away.colors;
  }

  return "Team not found";
}

function teamNames() {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  return [home.teamName, away.teamName];
}

function playerNumbers(teamName) {
  const gameObj = gameObject();
  const { home, away } = gameObj;
  let numbers = [];

  if (home.teamName === teamName) {
    for (let player in home.players) {
      numbers.push(home.players[player].number);
    }
  } else if (away.teamName === teamName) {
    for (let player in away.players) {
      numbers.push(away.players[player].number);
    }
  } else {
  
    return "Team not found";
  }

  return numbers;
}

function playerStats(playerName) {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  // Check the home team players
  for (let player in home.players) {
    if (player === playerName) {
      return home.players[player];
    }
  }

  // Check the away team players
  for (let player in away.players) {
    if (player === playerName) {
      return away.players[player];
    }
  }

  return "Player not found";
}
console.log(playerStats('Ben Gordon'));

function bigShoeRebounds() {
  const gameObj = gameObject();
  const { home, away } = gameObj;

  let largestShoeSize = 0;
  let rebounds = 0;

  console.log(largestShoeSize)

  // Check the home team players
  for (let player in home.players) {
    if (home.players[player].shoe > largestShoeSize) {
      largestShoeSize = home.players[player].shoe;
      rebounds = home.players[player].rebounds;
    }
  }
  console.log(rebounds)

  // Check the team players
  for (let player in away.players) {
    if (away.players[player].shoe > largestShoeSize) {
      largestShoeSize = away.players[player].shoe;
      rebounds = away.players[player].rebounds;
    }
    console.log(rebounds)
  }
}
  return rebounds;

  function mostPointsScored() {
    constObj = gameObject();
    const { home, away } = gameObj;
  
    let mostPoints = 0;
    let playerWithMostPoints = "";
  
    // Check the home team players
    for (let player in home.players) {
      if (home.players[player].points > mostPoints) {
        mostPoints = home.players[player].points;
        playerWithMostPoints = player;
      }
    }
  
    // Check the away team players
    for (let player in away.players) {
      if (away.players[player].points > mostPoints) {
        mostPoints = away.players[player].points;
        playerWithMostPoints = player;
      }
    }
  
    return playerWithMostPoints;
  }

  function winningTeam() {
    const gameObj = gameObject();
    const { home, away } = gameObj;
  
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
  
    for (let player in home.players) {
      homeTeamPoints += home.players[player].points;
    }
  
    for (let player in away.players) {
      awayTeamPoints += away.players[player].points;
    }
  

    if (homeTeamPoints > awayTeamPoints) {
      return home.teamName;
    } else if (homeTeamPoints < awayTeamPoints) {
      return away.teamName;
    } else {
      return "It's a tie!";
    }
  }

  function playerWithLongestName() {
    const gameObj = gameObject();
    const { home, away } = gameObj;
  
    let longestName = "";
    let playerWithLongestName = "";
  
    // Check the home team players
    for (let player in home.players) {
      if (player.length > longestName.length) {
        longestName = player;
        playerWithLongestName = player;
      }
    }
  

    for (let player in away.players) {
      if (player.length > longestName.length) {
        longestName = player;
        playerWithLongestName = player;
      }
    }
  
    return playerWithLongestName;
  }

  function doesLongNameStealATon() {
    const gameObj = gameObject();
    const { home, away } = gameObj;
  
    let longestName = "";
    let playerWithLongestName = "";
    let mostSteals = 0;
    let playerWithMostSteals = "";
  
 
    for (let player in home.players) {
      if (player.length > longestName.length) {
        longestName = player;
        playerWithLongestName = player;
      }
      if (home.players[player].steals > mostSteals) {
        mostSteals = home.players[player].steals;
        playerWithMostSteals = player;
      }
    }
  

    for (let player in away.players) {
      if (player.length > longestName.length) {
        longestName = player;
        playerWithLongestName = player;
      }
      if (away.players[player].steals > mostSteals) {
        mostSteals = away.players[player].steals;
        playerWithMostSteals = player;
      }
    }
  
    return playerWithLongestName === playerWithMostSteals;
  }