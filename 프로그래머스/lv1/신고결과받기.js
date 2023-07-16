function solution(id_list, report, k) {
  const declaration_list = new Map();
  const answer = [];
  const newReport = [...new Set(report)];

  id_list.map((id) => {
    declaration_list.set(id, []);
    answer.push(0);
  });

  for (let i = 0; i < newReport.length; i++) {
    const split = newReport[i].split(' ');
    declaration_list.set(split[1], [
      ...declaration_list.get(split[1]),
      split[0],
    ]);
  }

  for (let keyValue of declaration_list.entries()) {
    if (keyValue[1].length >= k) {
      keyValue[1].forEach((name) => (answer[id_list.indexOf(name)] += 1));
    }
  }

  return answer;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);
