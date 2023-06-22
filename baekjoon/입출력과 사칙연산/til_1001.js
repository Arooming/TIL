const sol = (input) => {
  const [a, b] = (input + "").split(" ").map((it) => +it);
  console.log(a - b);
};

process.stdin.on("data", sol);
