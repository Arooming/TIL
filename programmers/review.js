function solution(sizes) {
  let width = [];
  let height = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i][0] > sizes[i][1]
      ? (sizes[i] = [sizes[i][0], sizes[i][1]])
      : (sizes[i] = [sizes[i][1], sizes[i][0]]);

    const max = sizes[i][0];
    const min = sizes[i][1];

    width.push(max);
    height.push(min);
  }

  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);

  return width[0] * height[0];
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
