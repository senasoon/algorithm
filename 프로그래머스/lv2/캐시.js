function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (cacheSize === 0) {
      answer += 5;
      continue;
    }
    if (cache.includes(city)) {
      answer++;
      cache.splice(cache.indexOf(city), 1);
      cache.unshift(city);
    } else {
      answer += 5;
      if (cache.length === cacheSize) cache.pop();
      cache.unshift(city);
    }
  }
  return answer;
}

console.log(
  solution(3, [
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
    'Jeju',
    'Pangyo',
    'Seoul',
    'NewYork',
    'LA',
  ])
);
