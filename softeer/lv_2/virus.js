// K: 바이러스의 수, P: 증가율, N: 총 시간
// 바이러스는 1초 당 P배씩 증가
// N초 후 증가한 바이러스 수 구하기 (죽는 바이러스는 없음)

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // 수가 넘치는 것을 방지하기 위해서 BigInt 타입을 사용해야 함 .. .안 그러면 에러해결이 안됨
  let [virus, num, sec] = input.split(" ").map((el) => BigInt(+el));
  let mod = BigInt(1000000007);
  while (sec--) {
    virus = (virus * num) % mod;
  }

  // 맨 뒤에 n이 오는 걸 제거하기 위해서 parseInt 사용
  console.log(parseInt(virus));
});
