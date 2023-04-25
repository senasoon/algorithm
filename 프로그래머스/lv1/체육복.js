function solution(n, lost, reserve) {
  lost = lost.sort((a, b) => a - b);
  reserve = reserve.sort((a, b) => a - b);
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i])) {
      lost = lost.filter((number) => number !== reserve[i]);
      reserve = reserve.filter((number) => number !== reserve[i]);
      i--;
    }
  }
  for (let i = 0; i < reserve.length; i++) {
    if (lost.includes(reserve[i] - 1)) {
      lost = lost.filter((number) => number !== reserve[i] - 1);
      continue;
    }
    if (lost.includes(reserve[i] + 1)) {
      {
        lost = lost.filter((number) => number !== reserve[i] + 1);
      }
    }
  }
  return n - lost.length;
}

console.log(solution(5, [3, 4], [4, 5]));
