// any
// 특정 변수의 타입을 우리가 확실히 모를 때
// 타입 검사를 다 통과시켜주는 치트키 같은 존재 -> 타입 검사를 안하는 것과 같다 -> ts의 이점을 포기하는 것과 같음
// 오류가 있는 코드도 다 통과 -> 런타임에 에러 발생 -> 최악의 결과
let anyVar: any = 10;
let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

// 에러 -> unknown 타입은 어떤 타입의 변수에도 할당될 수 없음!
// num = unknownVar;

// unknown 타입은 어느 연산에나, 메소드에나, 함수에나 들어갈 수 없기 때문에 안정성이 더 높음!
// 변수에 어떤 타입을 줘야할 지 모르겠을 때, any보다 unknown을 쓰는게 더욱 안전하다

// void -> 아무 것도 없음을 의미하는 타입
// 함수가 undefined나 null로 정의되면 에러가 발생하기 때문에, 이런 경우 void로 써준다
function func(): void {
  console.log("hello");
}

// void로 선언된 변수에는 undefined만 할당 가능함
let a: void;
a = undefined;

// never -> 존재하지 않는/ 불가능한 타입
// 절대로 정상적으로 함수가 종료될 수 없어서, 이 함수에 반환 값이 있는 것 자체가 모순일 경우 never 사용
function func2(): never {
  while (true) {}
}

function func3(): never {
  // 이게 실행되면 바로 프로그램이 중지되기 때문에 never를 반환하는게 맞음
  throw new Error();
}

// undefined, null, any 등 어떠한 값도 저장할 수 없음!
let ab: never;
