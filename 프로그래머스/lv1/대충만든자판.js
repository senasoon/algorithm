function solution(keymap, targets) {
  const answer = [];
  const obj = {};
  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      if (!obj[keymap[i][j]] || obj[keymap[i][j]] > j) {
        obj[keymap[i][j]] = j + 1;
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      if (!obj[targets[i][j]]) {
        count = -1;
        break;
      }
      count += obj[targets[i][j]];
    }
    answer.push(count);
  }
  return answer;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
