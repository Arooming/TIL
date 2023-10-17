// 기능 개발
function solution(progresses, speeds) {
  var answer = [];
  let count = 1;

  let curProg = progresses.map((prog) => 100 - prog);
  let remaindDate = speeds.map((speed, i) => Math.ceil(curProg[i] / speed));

  let maxDate = remaindDate[0];

  for (let i = 1; i <= progresses.length; i++) {
    if (maxDate >= remaindDate[i]) {
      count += 1;
    } else {
      answer.push(count);
      count = 1;
      maxDate = remaindDate[i];
    }
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
