// 수박수박수박수박수박수?
function solution(n) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? answer.push("수") : answer.push("박");
  }

  return answer.join("");
}

// 정답 확인을 위한 콘솔
console.log(solution(3));
console.log(solution(4));
