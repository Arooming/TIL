// 소수찾기
function solution(numbers) {
  const getPermutation = (arr, selectNum) => {
    const result = [];
    // 재귀를 탈출하는 조건: 선택해야 하는 숫자가 1개일 때
    if (selectNum === 1) return arr.map((v) => [v]);

    // 재귀적으로 함수를 호출, 고정한 숫자 하나와 순열의 모든 경우를 하나의 배열에 합치기
    arr.forEach((fixed, idx, origin) => {
      // 조합을 구하고 싶은 경우, 아래와 같이 rest만 초기화 해주면 됨.
      // const rest = [...origin.slice(idx + 1)];

      // 자기 자신을 제외한 모든 수를 포함한 배열 (순열), 해당하는 fixed를 제외한 나머지 배열
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      // 나머지에 대한 순열 구하기
      const permutation = getPermutation(rest, selectNum - 1);
      // 돌아온 순열에 떼어놨던 fixed 값 붙이기
      const attatched = permutation.map((el) => [fixed, ...el]);
      //  spread syntax로 배열화하여 모두 push
      result.push(...attatched);
    });

    return result;
  };

  // 1은 소수가 아니므로, 1인 경우와 나머지 가 0인 경우 false 반환, 그렇지 않다면 true 반환
  const checkPrimeNum = (number) => {
    if (number < 2) return false;

    // N을 2부터 N의 제곱근으로 나눴을 때, 나머지가 0이 아닌 수를 찾는 것이 가장 속도가 빠름
    for (let i = 2; i <= Math.sqrt(number); i++) {
      const remainder = number % i;
      if (remainder === 0) return false;
    }

    return true;
  };

  // 011, 11과 같은 중복 숫자 방지를 위해 Set() 사용
  const answer = new Set();

  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)];
    const primeNum = permutation.filter((arr) => {
      const number = +arr.join("");
      const isPrimeNumber = checkPrimeNum(number);
      return isPrimeNumber;
    });

    primeNum.forEach((arr) => {
      answer.add(+arr.join(""));
    });
  }

  return answer.size;
}

console.log(solution("17"));
console.log(solution("011"));
console.log(solution("123"));
