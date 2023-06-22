const sol = (input) => {
  let [hour, min] = (input + "").split(" ").map((it) => +it);
  if (hour === 0) {
    if (min + 15 >= 60) {
      min -= 45;
    } else {
      hour = 23;
      min += 15;
    }
  } else {
    if (min + 15 >= 60) {
      min -= 45;
    } else {
      hour -= 1;
      min += 15;
    }
  }

  console.log(hour, min);
};

process.stdin.on("data", sol);
