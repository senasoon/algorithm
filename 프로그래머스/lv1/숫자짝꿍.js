function solution(X, Y) {
  let answer = '';
  for (let i = 0; i < 10; i++) {
    X = X.split(String(i));
    Y = Y.split(String(i));
    if (Math.min(X.length - 1, Y.length - 1) !== 0) {
      for (let j = 1; j <= Math.min(X.length - 1, Y.length - 1); j++) {
        answer += String(i);
      }
    }
    X = X.join('');
    Y = Y.join('');
  }
  return answer.length === 0
    ? '-1'
    : +answer === 0
    ? '0'
    : answer
        .split('')
        .sort((a, b) => b - a)
        .join('');
}

console.log(solution('5525', '1255'));
