// 1단에서 8단으로 연속적 변속 -> ascending
// 8단에서 1단으로 연속적 변속 -> descending
// 둘 다 아님 -> mixed

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let arr = [];

rl.on("line", (input) => {
  arr = input.split(" ").map((num) => +num);
});

rl.on("close", () => {
  const ascending = "ascending";
  const descending = "descending";
  const mixed = "mixed";
  const lastIdx = arr.length - 1;
  let answer = "";

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[0] === 1 && arr[lastIdx] === 8) {
      if (arr[i] - arr[i + 1] === -1) {
        answer = ascending;
      } else {
        console.log(mixed);
        // 주의!! return이 아닌 break로 하면 for문만 끝나기 때문에 함수 최하단 콘솔이 같이 찍혀서 에러남 !
        return;
      }
    } else if (arr[0] === 8 && arr[lastIdx] === 1) {
      if (arr[i] - arr[i + 1] === 1) {
        answer = descending;
      } else {
        console.log(mixed);
        // 주의!! return이 아닌 break로 하면 for문만 끝나기 때문에 함수 최하단 콘솔이 같이 찍혀서 에러남 !
        return;
      }
    } else {
      console.log(mixed);
      // 주의!! return이 아닌 break로 하면 for문만 끝나기 때문에 함수 최하단 콘솔이 같이 찍혀서 에러남 !
      return;
    }
  }

  console.log(answer);

  process.exit();
});
