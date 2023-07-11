function solution(today, terms, privacies) {
  let answer = [];
  const termsObj = {};
  for (let i = 0; i < terms.length; i++) {
    termsObj[terms[i][0]] = terms[i].slice(2);
  }
  for (let i = 0; i < privacies.length; i++) {
    const splitPrivacies = privacies[i].split(' ');
    const month =
      +(splitPrivacies[0][5] + splitPrivacies[0][6]) +
      +termsObj[splitPrivacies[1]];
    let result;
    if (month > 12) {
      if (month % 12 === 0) {
        result =
          String(+splitPrivacies[0].slice(0, 4) + parseInt(month / 12) - 1) +
          '12' +
          splitPrivacies[0].slice(8);
      } else {
        result =
          String(+splitPrivacies[0].slice(0, 4) + parseInt(month / 12)) +
          String(month % 12).padStart(2, '0') +
          splitPrivacies[0].slice(8);
      }
    } else {
      result =
        splitPrivacies[0].slice(0, 4) +
        String(month).padStart(2, '0') +
        splitPrivacies[0].slice(8);
    }
    if (+result <= +today.split('.').join('')) {
      answer.push(i + 1);
    }
  }
  return answer;
}

console.log(solution('2020.12.17', ['A 12'], ['2010.01.01 A', '2019.12.17 A']));
