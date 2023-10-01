// 큰 수 만들기
function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k--;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join("");
}

console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));