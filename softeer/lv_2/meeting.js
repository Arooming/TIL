// N: 회의실 수, M: 예약된 회의의 수
// 시작과 종료 시간이 동일한 회의는 없음
// 이미 예약된 M개의 회의에 대한 정보가 주어지면, 회의실 별로 시간대를 정리해 출력하는 프로그램 작성
// 회의실 이름: r, 시작 시각: s, 종료 시각: t
// 회의 가능 시간: 09 ~ 18
// 회의실 이름 오름차순 정렬

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

  const [N, M] = inputArr[0].map(Number);
  const roomName = inputArr
    .slice(1, 1 + N)
    .map((v) => v.join(""))
    .sort();
  const reservation = inputArr.slice(1 + N);

  const timetable = [];
  const result = [];

  for (let i = 0; i < N; i++) {
    let time = new Array(9).fill(0);
    for (let j = 0; j < M; j++) {
      const start = +reservation[j][1] - 9;
      const end = +reservation[j][2] - 9;

      if (reservation[j][0] === roomName[i]) {
        for (let k = start; k < end; k++) {
          time[k] = 1;
        }
      }
    }
    timetable.push(time);
  }

  for (let i = 0; i < N; i++) {
    const arr = [];
    for (let j = 0; j < 9; j++) {
      if (timetable[i][j] === 0) {
        if (j === 0 || timetable[i][j - 1] === 1) {
          arr.push(j + 9);
        }
        if (j === 8) {
          arr.push(18);
        }
      } else {
        if (timetable[i][j - 1] === 0) {
          arr.push(j + 9);
        }
      }
    }
    result.push(arr);
  }

  for (let i = 0; i < N; i++) {
    console.log(`Room ${roomName[i]}:`);
    if (result[i].length) {
      console.log(`${result[i].length / 2} available:`);
    } else {
      console.log("Not available");
    }

    for (let j = 0; j < result[i].length - 1; j += 2) {
      const start = String(result[i][j]).padStart(2, 0);
      const end = String(result[i][j + 1]).padStart(2, 0);

      console.log(`${start}-${end}`);
    }

    if (i !== N - 1) {
      console.log("-----");
    }
  }

  process.exit();
});
