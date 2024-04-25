// 최소 직사각형
function solution(sizes) {
  const sortedSizes = sizes.map((size) =>
    size[0] > size[1] ? [size[0], size[1]] : [size[1], size[0]]
  );
  const width = sortedSizes.map((sortedSize) => {
    return sortedSize[0];
  });

  const height = sortedSizes.map((sortedSize) => {
    return sortedSize[1];
  });

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
