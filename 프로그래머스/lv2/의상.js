function solution(clothes) {
  let answer = 1;
  const hashMap = new Map();

  for (let i = 0; i < clothes.length; i++) {
    hashMap.set(clothes[i][1], (hashMap.get(clothes[i][1]) || 0) + 1);
  }

  for (let value of hashMap.values()) {
    answer *= value + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
);
