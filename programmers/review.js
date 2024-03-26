// 소수찾기
function solution(numbers) {
  const getPermutations = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((it) => [it]);
    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutation = getPermutations(rest, selectNum - 1);
      const attatch = permutation.map((el) => [fixed, ...el]);

      result.push(...attatch);
    });

    return result;
  };

  const checkPrimeNum = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  const answer = new Set();
  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutations([...numbers], i)];
    const primeNum = permutation.filter((arr) => checkPrimeNum(+arr.join("")));

    primeNum.forEach((arr) => {
      answer.add(+arr.join(""));
    });
  }

  return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("123"));
