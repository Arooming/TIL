// 기능 개발
function solution(progresses, speeds) {
  var answer = [];

  let tasks = progresses.map((prog) => 100 - prog);
  let days = tasks.map((task, i) => Math.ceil(task / speeds[i]));
  let count = 1;

  let maxDay = days[0];
  for (let i = 1; i < days.length; i++) {
    if (maxDay < days[i]) {
      answer.push(count);
      maxDay = days[i];
      count = 1;
    } else {
      count += 1;
    }
  }

  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
