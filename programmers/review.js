function solution(progresses, speeds) {
  var answer = [];
  let counter = 1;

  const tasks = progresses.map((prog) => 100 - prog);
  let days = speeds.map((speed, i) => Math.ceil(tasks[i] / speed));

  let maxDay = days[0];

  for (let i = 1; i < days.length; i++) {
    if (maxDay < days[i]) {
      answer.push(counter);
      maxDay = days[i];
      counter = 1;
    } else {
      counter += 1;
    }
  }
  answer.push(counter);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
