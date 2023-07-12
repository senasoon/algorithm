function solution(players, callings) {
  const playersMap = {};

  for (let i = 0; i < players.length; i++) {
    playersMap[players[i]] = i;
  }

  for (let i = 0; i < callings.length; i++) {
    const index = playersMap[callings[i]];
    const temp = players[index - 1];

    players[index - 1] = callings[i];
    players[index] = temp;

    playersMap[callings[i]] = index - 1;
    playersMap[temp] = index;
  }

  return players;
}

console.log(
  solution(
    ['mumu', 'soe', 'poe', 'kai', 'mine'],
    ['kai', 'kai', 'mine', 'mine']
  )
);
