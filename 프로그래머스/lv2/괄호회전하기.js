function solution(s) {
  let answer = 0;
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let temp = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === '[' || s[j] === '(' || s[j] === '{') {
        temp.push(s[j]);
      } else {
        if (j === 0 || temp.length === 0) break;
        if (obj[temp[temp.length - 1]] !== s[j]) break;
        temp.pop();
      }
      if (j === s.length - 1 && temp.length === 0) answer++;
    }
    temp = [];
    s = s.slice(1) + s[0];
  }
  return answer;
}

console.log(solution('}]()[{'));
