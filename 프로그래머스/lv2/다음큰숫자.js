function solution(n) {
  const one = n.toString(2).replaceAll('0', '');
  let number = n + 1;
  while (true) {
    if (number.toString(2).replaceAll('0', '') === one) {
      break;
    } else {
      number++;
    }
  }
  return number;
}

console.log(solution(78));
