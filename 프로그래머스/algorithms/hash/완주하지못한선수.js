function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    } else {
      continue;
    }
  }
}

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    map.set(participant[i], (map.get(participant[i]) || 0) + 1);
    if (i !== participant.length - 1)
      map.set(completion[i], (map.get(completion[i]) || 0) - 1);
  }
  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
