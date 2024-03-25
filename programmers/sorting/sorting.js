const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

const newArr = arr.map((it) => it);

// 오름차순
const sortingX = newArr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
const sortingY = arr.sort((a, b) => a[1] - b[1]);

// 내림차순
// const sortingX = newArr.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
// const sortingY = arr.sort((a, b) => b[1] - a[1]);

console.log("sortingX:", sortingX);
console.log("sortingY:", sortingY);
