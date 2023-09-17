// 소수 찾기 (순열 활용)
// 순열: n개 중 r개를 순서대로 뽑아서 줄 세우기
// 순열을 구하는 함수
const getPermutation = (arr, selectNumber) => {
  const results = [];
  // 선택해야하는 숫자가 1개일 때, 모든 배열의 원소 반환
  if (selectNumber === 1) return arr.map((v) => [v]);
  else {
    arr.forEach((fixed, index, origin) => {
      // 자기 자신을 제외한 모든 숫자 포함
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      // 재귀적으로 함수 호출
      const permutations = getPermutation(rest, selectNumber - 1);

      // 고정 숫자 하나와 순열의 모든 경우 합침
      const attached = permutations.map((permutation) => [
        fixed,
        ...permutation,
      ]);
      results.push(...attached);
    });
  }

  return results;
};

// 소수 판별하는 함수
const checkPrimeNumber = (number) => {
  if (number < 2) return false;

  // 소수 판별하는 방법 중 속도가 가장 빠른 방법: 2부터 N의 제곱근까지의 수로 N을 나누었을 때 나머지가 0이 되지 않는 것 찾기
  for (let i = 2; i <= Math.sqrt(number); i++) {
    const remainder = number % i;
    // 나머지가 0인 경우, 소수가 아님
    if (remainder === 0) return false;
  }
  return true;
};

function solution(numbers) {
  // Set()을 활용하여 중복제거 (011과 11은 동일 -> 중복 제거)
  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    // 순열 구하기
    const permutation = [...getPermutation([...numbers], i)];
    const primeNumbers = permutation.filter((arr) => {
      // 숫자 조합
      const number = +arr.join("");
      // 소수 체크
      const isPrimeNumber = checkPrimeNumber(number);
      return isPrimeNumber;
    });

    primeNumbers.forEach((arr) => {
      // arr을 문자열 형태로 바꿔서 answer에 추가
      answer.add(+arr.join(""));
    });
  }

  return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("123"));
