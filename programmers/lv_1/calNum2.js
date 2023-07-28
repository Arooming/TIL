// 약수의 개수와 덧셈
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let cal = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cal += 1;
      }
    }
    cal % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));


// 참고 코드
/* function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
} */