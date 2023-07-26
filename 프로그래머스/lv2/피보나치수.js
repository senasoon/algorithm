function solution(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    const number = (answer[i - 2] % 1234567) + (answer[i - 1] % 1234567);
    answer.push(number % 1234567);
  }
  return answer[n];
}

console.log(solution(3));
