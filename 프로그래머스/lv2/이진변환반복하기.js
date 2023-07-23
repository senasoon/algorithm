function solution(s) {
  let length = s.length;
  let zero = 0;
  let count = 0;
  while (s !== '1') {
    s = s.replace(/0/g, '');
    zero += length - s.length;
    s = s.length.toString(2);
    length = s.length;
    count++;
  }
  return [count, zero];
}

console.log(solution('110010101001'));
