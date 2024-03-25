function solution(v) {
  v.sort((a, b) => a - b);
  let x = [];
  let y = [];
  let answer = [];

  for (let i = 0; i < v.length; i++) {
    x.push(v[i][0]);
    y.push(v[i][1]);
  }

  x = x.filter((it) => it !== x[0]);
  y = y.filter((it) => it !== y[0]);

  x.length === 2 ? answer.push(v[0][0]) : answer.push(x[0]);
  y.length === 2 ? answer.push(v[0][1]) : answer.push(y[0]);

  console.log(answer);
}

console.log(
  solution([
    [1, 4],
    [3, 4],
    [3, 10],
  ])
);
console.log(
  solution([
    [1, 1],
    [2, 2],
    [1, 2],
  ])
);
