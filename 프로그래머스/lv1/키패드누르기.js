function solution(numbers, hand) {
  let answer = '';
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let currentLeft = '*';
  let currentRight = '#';
  for (let i = 0; i < numbers.length; i++) {
    if (keyPad[numbers[i]][1] === 0) {
      answer += 'L';
      currentLeft = numbers[i];
    } else if (keyPad[numbers[i]][1] === 2) {
      answer += 'R';
      currentRight = numbers[i];
    } else {
      let leftDistance =
        Math.abs(keyPad[[numbers[i]]][0] - keyPad[currentLeft][0]) +
        Math.abs(keyPad[[numbers[i]]][1] - keyPad[currentLeft][1]);
      let rightDistance =
        Math.abs(keyPad[[numbers[i]]][0] - keyPad[currentRight][0]) +
        Math.abs(keyPad[[numbers[i]]][1] - keyPad[currentRight][1]);
      if (leftDistance === rightDistance) {
        if (hand === 'left') {
          answer += 'L';
          currentLeft = numbers[i];
        } else {
          answer += 'R';
          currentRight = numbers[i];
        }
      } else {
        if (leftDistance < rightDistance) {
          answer += 'L';
          currentLeft = numbers[i];
        } else {
          answer += 'R';
          currentRight = numbers[i];
        }
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
