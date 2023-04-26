function solution(babbling) {
  let answer = 0;
  const possible = ['aya', 'ye', 'woo', 'ma'];
  for (let i = 0; i < babbling.length; i++) {
    let tmp = babbling[i];
    for (let j = 0; j < possible.length; j++) {
      if (tmp.includes(possible[j].repeat(2))) break;

      tmp = tmp.split(possible[j]).join(' ');
    }
    if (tmp.split(' ').join('').length === 0) answer++;
  }
  return answer;
}
