function solution(k, tangerine) {
  let count = {};
  let answer = 0;
  for (let i = 0; i < tangerine.length; i++) {
    count[tangerine[i]] = (count[tangerine[i]] || 0) + 1;
  }
  count = Object.entries(count).sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < count.length; i++) {
    if (k > 0) {
      k -= count[i][1];
      answer++;
    } else {
      break;
    }
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
