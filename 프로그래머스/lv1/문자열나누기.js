function solution(s) {
  var answer = 0;
  let first = s[0];
  let same = 1;
  let diff = 0;
  for (let i = 1; i < s.length; i++) {
    first === s[i] ? same++ : diff++;
    if (same === diff) {
      answer++;
      first = s[i + 1];
      same = 0;
      diff = 0;
    } else if (same !== diff && i === s.length - 1) {
      answer++;
    }
  }
  return s.length === 1 ? 1 : answer;
}

console.log(solution('a'));
