// 소수 찾기
function solution(numbers) {
  function getPermutaion(arr, n) {
    const result = [];
    if (n === 1) return arr.map((it) => [it]);

    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutation = getPermutaion(rest, n - 1);
      const attached = permutation.map((it) => [...it, fixed]);

      result.push(...attached);
    });

    return result;
  }

  function getPrimeNum(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = getPermutaion([...numbers], i);
    const primeNum = permutation.filter((perm) => getPrimeNum(+perm.join("")));

    primeNum.forEach((prime) => {
      answer.add(+prime.join(""));
    });
  }

  return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));
