// 가장 큰 수
function solution(numbers) {
  const numbersToStr = numbers
    .map((num) => {
      return num.toString();
    })
    .sort((a, b) => b + a - (a + b));

  return numbersToStr[0] === "0" ? "0" : numbersToStr.join("");
}
