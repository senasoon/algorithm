function solution(priorities, location) {
  const temp = [];

  for (let i = 0; i < priorities.length; i++) {
    temp.push(i);
  }

  let max = Math.max(...priorities);
  let answer = 1;

  while (priorities.length !== 0) {
    if (priorities[0] < max) {
      priorities.push(priorities.shift());
      temp.push(temp.shift());
    } else {
      if (temp[0] === location) {
        return answer;
      } else {
        priorities.shift();
        temp.shift();
        max = Math.max(...priorities);
        answer++;
      }
    }
  }
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
