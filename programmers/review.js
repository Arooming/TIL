// 기능개발
function solution(progresses, speeds) {
  const remains = progresses.map((it) => 100 - it);
  const deploy = remains.map((v, idx) => Math.ceil(v / speeds[idx]));
  let max = deploy[0];
  let dueDate = 1;
  const answer = [];

  for (let i = 1; i < deploy.length; i++) {
    if (max >= deploy[i]) {
      dueDate += 1;
    } else {
      answer.push(dueDate);
      max = deploy[i];
      dueDate = 1;
    }
  }
  answer.push(dueDate);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
