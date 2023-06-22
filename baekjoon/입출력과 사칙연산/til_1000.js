const sol = (input) => {
  const [a, b] = (input + "").split(" ").map((s) => +s);
  console.log(a + b);
};

// 콘솔 입력 받는 법
// on()이 process.stdin을 실행시키는 함수인 듯
process.stdin.on("data", sol);
