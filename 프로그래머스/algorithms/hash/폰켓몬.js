function solution(nums) {
  const arr = new Set(nums);
  return arr.size >= nums.length / 2 ? nums.length / 2 : arr.size;
}

function solution(nums) {
  const answer = nums.reduce((obj, cur) => {
    obj[cur] ? obj[cur]++ : (obj[cur] = 1);
    return obj;
  }, {});
  return Object.keys(answer).length > nums.length / 2
    ? nums.length / 2
    : Object.keys(answer).length;
}

console.log(solution([3, 1, 2, 3]));
