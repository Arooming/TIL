// 기능 개발
// Math.ceil() : 반올림 함수
function solution(progresses, speeds) {
  var answer = [];
  let counter = 1;

  const remainedDays = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  let maxDay = remainedDays[0];

  for (let j = 1; j < progresses.length; j++) {
    if (maxDay < remainedDays[j]) {
      answer.push(counter);
      maxDay = remainedDays[j];
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
