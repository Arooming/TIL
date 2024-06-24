// N개의 문자열 쌍
// 각 쌍에 대해 S의 길이 === T의 길이
// S글자 x 또는 X가 등장하는 위치: P
// 이때 T의 P번 째 글자 읽기 (단, 소문자 -> 대문자로 바꾸기)

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = "";

rl.on("line", (line) => {
  input += line + "\n";
});

rl.on("close", () => {
  const inputArr = input
    .trim()
    .split("\n")
    .map((line) => line.split(" "));

  const N = +inputArr[0][0];
  const arr = inputArr.slice(1);
  const result = [];

  for (let i = 0; i < N; i++) {
    const S = arr[i][0];
    const T = arr[i][1];

    if (S.includes("x")) {
      result.push(T[S.indexOf("x")]);
    } else if (S.includes("X")) {
      result.push(T[S.indexOf("X")]);
    }
  }

  console.log(result.join("").toUpperCase());

  process.exit();
});
