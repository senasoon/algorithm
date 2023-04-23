function solution(number, limit, power) {
  let answer = [];
  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisor += 1;
      }
    }
    divisor += 1;
    divisor > limit ? answer.push(power) : answer.push(divisor);
  }
  return answer.reduce((arr, cur) => arr + cur, 0);
}
