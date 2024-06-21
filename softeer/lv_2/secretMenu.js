// K개의 버튼
// M개의 조작 버튼 -> 순서대로 버튼 누름 -> 비밀 메뉴 식권 발매
// 앞뒤로 다른 버튼 조작이 있어도 비밀 메뉴로 인정
// M: 비밀 메뉴 조작법을 나타내는 정수의 개수
// N: 사용자 버튼 조작 개수
// K: 정수의 범위 (1 ~ K)
// 사용자가 비밀 메뉴 식권을 받을 수 있으면 secret, 아니면 normal 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const NORMAL = "normal";
const SECRET = "secret";

let arr = [];

rl.on("line", (input) => {
  const contents = input.split(" ").map((num) => +num);
  arr = [...arr, contents];
});

rl.on("close", () => {
  const key = arr[1];
  const user_input = arr[2];
  let result = "";
  let slicedArr = [];

  for (let i = 0; i < user_input.length; i++) {
    if (key[0] === user_input[i]) {
      slicedArr = user_input.slice(i, i + key.length);

      if (slicedArr.length === key.length) {
        let cnt = 0;
        for (let j = 0; j < key.length; j++) {
          if (slicedArr[j] === key[j]) {
            cnt++;
          }
        }
        if (cnt === key.length) {
          console.log(SECRET);
          return;
        }
      }
    }
  }

  console.log(result ? result : NORMAL);

  process.exit();
});
