// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hi", "hello", "bye"];

// 제네릭 방식
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// union type: |를 활용하여 여러 개의 타입을 허용해주는 방식
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플: 길이와 타입이 고정된 배열
// 길이나 타입이 다른 배열로 변경 불가능
// 컴파일 결과 반환된 js 파일을 열어보면, 튜플은 그냥 배열로 나와있음
// 배열 메서드(push, pop 등) 사용 시, 튜플의 길이 제한 관련 어떠한 에러도 발생하지 않음 (튜플 사용 시, 유의하기!)
// 인덱스 위치에 따라 넣어야 하는 값의 타입이 정해져있고 해당 순서를 지키야 할 때 유용하게 사용 가능!
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

// object
// 객체 리터럴 타입 활용
// 구조적 타입 시스템(Property Based TS): ts는 객체의 구조(property)를 기준으로 타입을 정의함
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "아름",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "doldol",
  color: "brown",
};

let config: {
  // property를 정의할 때, readonly를 붙여주면 property 값을 바꾸는 행위를 막을 수 있다!
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};

// config.apiKey = "hacked";
