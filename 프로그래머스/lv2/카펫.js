function solution(brown, yellow) {
  let answer = [];
  for (let y = 3; y <= (brown + yellow) / y; y++) {
    let x = Math.floor((brown + yellow) / y);
    if ((x - 2) * (y - 2) === yellow) {
      answer = [x, y];
      break;
    }
  }
  return answer;
}

console.log(solution(18, 6));
