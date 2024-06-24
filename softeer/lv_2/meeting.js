// 회의: 회의실(r), 시작 시각(s / hour), 종료 시각(t / hour)
// 회의실 수: N, 예약된 회의의 수: M
// 길이가 0인 회의(시작 시각 === 종료 시각) 없음
// 이미 예약된 회의 개수: M개
// 회의실 별로 비어 있는 시간대 출력 -> 회의실 이름 기준 오름차순 출력

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArr = [];

rl.on("line", (input) => {
  let meeting = input.split(" ");
  inputArr = [...inputArr, meeting];
});

rl.on("close", () => {
  const N = parseInt(inputArr[0][0]);
  const M = parseInt(inputArr[0][1]);
  const timeArr = [];

  const roomArr = new Array(N);
  // 회의 시간 0으로 초기화
  for (let i = 0; i < N; i++) {
    roomArr[i] = new Array(9).fill(0);
  }

  const nameArr = new Array(N);
  // 회의실 이름 배열에 넣기
  for (let i = 0; i < N; i++) {
    nameArr[i] = inputArr[i + 1];
  }
  // 회의실 이름 오름차순 정렬
  nameArr.sort();

  for (let i = N + 1; i <= N + M; i++) {
    let roomName = 0;
    for (; roomName < N; roomName++) {
      if (nameArr[roomName][0] === inputArr[i][0]) {
        break;
      }
    }

    let start = Number(inputArr[i][1]) - 9;
    let end = Number(inputArr[i][2]) - 9;
    for (; start < end; start++) {
      roomArr[roomName][start] = 1;
    }
  }

  for (let i = 0; i < roomArr.length; i++) {
    let availableArr = [];

    // 예약 가능 시간 저장
    for (let j = 0; j < roomArr[i].length; j++) {
      if (roomArr[i][j] === 0) {
        if (j === 0 || roomArr[i][j - 1] === 1) {
          availableArr.push(j + 9);
        } else if (j === roomArr[i].length - 1) {
          availableArr.push(j + 10);
        }
      } else {
        if (roomArr[i][j - 1] === 0) {
          availableArr.push(j + 9);
        }
      }
    }
    timeArr.push(availableArr);

    console.log(`Room ${nameArr[i][0]}:`);

    if (!timeArr[i].length) {
      console.log("Not available");
    } else {
      console.log(`${availableArr.length / 2} available:`);
      for (let t = 0; t < timeArr[i].length; t += 2) {
        const startTime = String(timeArr[i][t]).padStart(2, 0);
        const endTime = String(timeArr[i][t + 1]).padStart(2, 0);
        console.log(`${startTime}-${endTime}`);
      }
    }

    if (i !== roomArr.length - 1) console.log("-----");
  }

  process.exit();
});
