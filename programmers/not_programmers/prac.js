// readline 모듈 불러오기
const readline = require('readline');
// interface 객체 만들기
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 'line': 입력받은 값을 한 줄씩 읽어 문자열 타입으로 전달
rl.on('line', (line) => {
    // 입력받은 값을 처리하는 코드
})

// 'close': 인터페이스 종료. 무한히 입력받는 것을 방지. 입력이 끝난 후 실행되어야 할 함수 작성
rl.on('close', () => {
    // 입력이 끝나고 실행하는 코드
})