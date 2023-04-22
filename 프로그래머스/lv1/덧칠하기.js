function solution(n, m, section) {
  let answer = 0;
  let max = 0;
  section.forEach((number) => {
    if (number > max) {
      answer++;
      max = number + m - 1;
    }
  });
  return answer;
}
