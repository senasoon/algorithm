function solution(s) {
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      left++;
    } else {
      if (left - 1 < 0) {
        return false;
      } else {
        left--;
      }
    }
  }

  return left !== 0 ? false : true;
}

console.log(solution('(()('));
