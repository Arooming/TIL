// 최소 직사각형
function solution(sizes) {
  let newArr = sizes.map((i) => (i[0] > i[1] ? [i[0], i[1]] : [i[1], i[0]]));
  let width = newArr.map((w) => w[0]).sort((a, b) => b - a);
  let height = newArr.map((h) => h[1]).sort((a, b) => b - a);

  return width[0] * height[0];
}

/*
function solution(sizes) {
  let width = [];
  let height = [];

  for (let i = 0; i < sizes.length; i++) {
    const max = Math.max(sizes[i][0], sizes[i][1]);
    const min = Math.min(sizes[i][0], sizes[i][1]);

    width.push(max);
    height.push(min);
  }

  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);

  return width[0] * height[0];
}
*/

console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
