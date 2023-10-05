function solution(s) {
  const map = new Map();

  s = s.replaceAll('{', '').replaceAll('}', '').split(',');

  const temp = [...new Set(s)];

  for (let i = 0; i < temp.length; i++) {
    map.set(Number(temp[i]), s.filter((ele) => ele === temp[i]).length);
  }

  const answer = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  return [...answer.keys()];
}

console.log(solution('{{1,2,3},{2,1},{1,2,4,3},{2}}'));
