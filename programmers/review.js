// 소수 찾기
// 순열을 구하는 함수
const getPermutation = (arr, selectNumber) => {
  const result = [];
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      const permutations = getPermutation(rest, selectNumber - 1);

      const attached = permutations.map((permu) => [fixed, ...permu]);
      result.push(...attached);
    });
  }

  return result;
};

// 소수 판별하는 함수
const checkPrimeNumber = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    const num = number % i;
    if (num === 0) {
      return false;
    }
  }

  return true;
};

function solution(numbers) {
  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)];

    const primeNumbers = permutation.filter((arr) => {
      const number = +arr.join("");
      const isPrimeNumber = checkPrimeNumber(number);
      return isPrimeNumber;
    });

    primeNumbers.forEach((arr) => answer.add(+arr.join("")));
  }

  return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("123"));
