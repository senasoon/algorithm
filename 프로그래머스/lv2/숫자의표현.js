function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    let sum = i;
    for (let j = i + 1; j <= n; j++) {
      sum += j;
      if (sum >= n) {
        if (sum === n) answer++;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(15));
