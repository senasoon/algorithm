function solution(progresses, speeds) {
  const answer = [];
  let beforeDate = 1;
  let sumDay = 0;
  const dayMap = new Map();
  for (let i = 0; i < progresses.length; i++) {
    const remain = 100 - progresses[i];
    let finish = 0;
    if (remain % speeds[i] > 0) {
      finish = Math.floor(remain / speeds[i]) + 1;
    } else {
      if (remain / speeds[i] < 0) {
        finish = 1;
      } else {
        finish = Math.floor(remain / speeds[i]);
      }
    }
    dayMap.set(i, finish);
  }

  dayMap.forEach((value, key) => {
    if (key === 0) beforeDate = value;
    if (beforeDate < value) {
      beforeDate = value;
      answer.push(sumDay);
      sumDay = 1;
    } else {
      sumDay++;
    }
    if (key === progresses.length - 1) answer.push(sumDay);
  });

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
