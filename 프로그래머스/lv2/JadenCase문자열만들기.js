function solution(s) {
  s = s.toLowerCase().split(' ');
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '') {
      continue;
    } else {
      s[i] = s[i][0].toUpperCase() + s[i].slice(1);
    }
  }

  return s.join(' ');
}

console.log(solution(' aaa aaaaaa '));
