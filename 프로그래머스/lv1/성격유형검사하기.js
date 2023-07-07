function solution(survey, choices) {
  let answer = 'RTCFJMAN';
  const count = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  const score = {
    1: 3,
    2: 2,
    3: 1,
    4: 0,
    5: 1,
    6: 2,
    7: 3,
  };

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] <= 3) {
      count[survey[i][0]] += score[choices[i]];
    } else if (choices[i] >= 5) {
      count[survey[i][1]] += score[choices[i]];
    }
  }

  for (let i = 0; i < answer.length; i += 2) {
    if (count[answer[i]] > count[answer[i + 1]]) {
      console.log(answer[i]);
      answer = answer.replace(answer[i + 1], '');
      i--;
    } else if (count[answer[i]] < count[answer[i + 1]]) {
      answer = answer.replace(answer[i], '');
      i--;
    } else {
      answer[i] > answer[i + 1]
        ? (answer = answer.replace(answer[i], ''))
        : (answer = answer.replace(answer[i + 1], ''));
      i--;
    }
  }
  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
