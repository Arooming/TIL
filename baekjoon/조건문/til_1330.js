const sol = (input) => {
  const [a, b] = (input + "").split(" ").map((it) => +it);
  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else {
    console.log("==");
  }
};

process.stdin.on("data", sol);
