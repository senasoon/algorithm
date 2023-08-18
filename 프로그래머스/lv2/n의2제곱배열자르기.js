function solution(n, left, right) {
  const answer = [];
  const startRow = Math.floor(left / n) + 1;
  const startCol = Math.floor(left % n) + 1;
  const endRow = Math.floor(right / n) + 1;
  const endCol = Math.floor(right % n) + 1;
  for (let i = startRow; i <= endRow; i++) {
    const jStart = i === startRow ? startCol : 1;
    const jEnd = i === endRow ? endCol : n;
    for (let j = jStart; j <= jEnd; j++) {
      if (j <= i) {
        answer.push(i);
      } else {
        answer.push(j);
      }
    }
  }
  return answer;
}

console.log(solution(4, 7, 14));
