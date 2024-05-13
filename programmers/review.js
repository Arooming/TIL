// 소수 찾기
function solution(numbers) {
  function getPermutation(arr, selectNum) {
    const result = [];
    if (selectNum === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutation = getPermutation(rest, selectNum - 1);
      const attached = permutation.map((perm) => [fixed, ...perm]);

      result.push(...attached);
    });

    return result;
  }

  function checkPrimeNum(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)];
    const primeNum = permutation.filter((perm) => {
      return checkPrimeNum(+perm.join(""));
    });

    primeNum.forEach((arr) => {
      answer.add(+arr.join(""));
    });
  }

  return answer.size;
}
