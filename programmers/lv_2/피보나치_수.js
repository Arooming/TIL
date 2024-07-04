function solution(n) {
  const arr = [0, 1, 1];

  while (arr.length <= n) {
    let i = arr.length - 1;
    // 피보나치 수는 숫자가 조금만 커져도 오버플로우가 나기 때문에, 1234567로 나눈 나머지 자체를 배열에 저장하는게 핵심 !!
    let sum = parseInt((arr[i] + arr[i - 1]) % 1234567);
    arr.push(sum);
  }

  return arr[n];
}
