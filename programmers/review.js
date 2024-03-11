// 최소 직사각형
function solution(sizes) {
  const width = [];
  const height = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      width.push(sizes[i][0]);
      height.push(sizes[i][1]);
    } else {
      width.push(sizes[i][1]);
      height.push(sizes[i][0]);
    }
  }

  return Math.max(...width) * Math.max(...height);
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
