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

  const N = +inputArr[0][0];
  const M = +inputArr[0][1];
  const roomName = inputArr
    .slice(1, N + 1)
    .map((name) => name.join(""))
    .sort();
  const reservation = inputArr.slice(N + 1);

  // 예약된 시간 자체를 저장한 배열
  const timeArr = [];

  // 전체 예약 가능/ 불가능 시간 정보가 저장된 배열
  const totalTimetable = [];

  const result = [];

  // 예약 불가능 시간 타임 테이블 생성
  for (let i = 0; i < N; i++) {
    const arr = [];

    for (let j = 0; j < M; j++) {
      const room = reservation[j][0];
      const start = +reservation[j][1];
      const end = +reservation[j][2];

      if (room === roomName[i]) {
        arr.push([start, end]);
      }
    }
    arr.sort((a, b) => a[0] - b[0]);
    timeArr.push(arr);
  }

  // 전체 예약 가능/ 불가능 시간 정보 저장
  for (let i = 0; i < N; i++) {
    const timetable = new Array(9).fill(0);
    for (let j = 0; j < timeArr[i].length; j++) {
      const start = timeArr[i][j][0] - 9;
      const end = timeArr[i][j][1] - 9;

      for (k = start; k < end; k++) {
        timetable[k] = 1;
      }
    }
    totalTimetable.push(timetable);
  }

  for (let i = 0; i < N; i++) {
    const arr = [];
    for (let j = 0; j < 9; j++) {
      if (totalTimetable[i][j] === 0) {
        if (j === 0 || totalTimetable[i][j - 1] === 1) {
          arr.push(j + 9);
        }
      } else {
        if (j > 0 && totalTimetable[i][j - 1] === 0) {
          arr.push(j + 9);
        }
      }
    }
    if (totalTimetable[i][8] === 0) {
      arr.push(18);
    }
    result.push(arr);
  }

  // 출력
  for (let i = 0; i < N; i++) {
    console.log(`Room ${roomName[i]}:`);
    if (result[i].length === 0) {
      console.log("Not available");
    } else {
      console.log(`${result[i].length / 2} available:`);
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
