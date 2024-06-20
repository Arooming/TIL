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
    let timeArr = [];
    let cnt = 1;
    let availableArr = [];

    for (let j = 0; j < 9; j++) {
      if (roomArr[i][j] === 0) {
        timeArr.push(j + 9);
      }
    }

    console.log(`Room ${nameArr[i][0]}:`);
    if (!roomArr[i].includes(0)) {
      console.log("Not available");
    } else {
      for (let k = 0; k < timeArr.length - 1; k++) {
        if (Math.abs(timeArr[k] - timeArr[k + 1]) !== 1) {
          cnt++;
        }
      }
      console.log(`${cnt} available:`);

      // 예약 가능 시간 출력
      for (let t = 0; t < 9; t++) {
        if ((t === 0 || roomArr[i][t - 1] === 1) && roomArr[i][t] === 0) {
          availableArr.push(String(t + 9).padStart(2, 0));
        } else if (roomArr[i][t] === 1 && roomArr[i][t - 1] === 0) {
          availableArr.push(String(t + 9).padStart(2, 0));
        } else if (t === 8 && roomArr[i][t] === 0) {
          availableArr.push(t + 10);
        }
      }
    }

    for (let k = 0; k < availableArr.length; k += 2) {
      let start = availableArr[k];
      let end = availableArr[k + 1];

      console.log(`${start}-${end}`);
    }

    if (i !== roomArr.length - 1) console.log("-----");
  }

  process.exit();
});
