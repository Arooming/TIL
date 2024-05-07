// 기능개발
function solution(progresses, speeds) {
  const answer = [];
  let cnt = 1;
  const remainders = progresses.map((progress) => {
    return 100 - progress;
  });
  const days = remainders.map((remainder, idx) => {
    return Math.ceil(remainder / speeds[idx]);
  });

  let MAX = days[0];
  for (let i = 1; i < days.length; i++) {
    if (MAX >= days[i]) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      MAX = days[i];
    }
  }
  answer.push(cnt);

  return answer;
}
