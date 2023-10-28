function solution(str1, str2) {
  let min = 0;
  let max = 0;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const str1Arr = [];
  const str2Arr = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const ele = str1[i] + str1[i + 1];
    if (/^[a-z]*$/.test(ele)) {
      str1Arr.push(ele);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const ele = str2[i] + str2[i + 1];
    if (/^[a-z]*$/.test(ele)) {
      str2Arr.push(ele);
    }
  }

  const setArr = [...new Set(str1Arr)];

  for (let i = 0; i < setArr.length; i++) {
    if (str2Arr.includes(setArr[i])) {
      const regexp = new RegExp(setArr[i], 'g');

      min += Math.min(
        str1Arr.join('.').match(regexp).length,
        str2Arr.join('.').match(regexp).length
      );
    }
  }

  max = str1Arr.length + str2Arr.length - min;

  return min === 0 && max === 0 ? 65536 : Math.floor((min / max) * 65536);
}

console.log(solution('FRANCE', 'french'));
