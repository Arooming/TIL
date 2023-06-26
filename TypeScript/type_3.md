**[📆 2023-06-26 TIL]**

<br/>

# 📍 TS type 정의

### 👀 TS에서 타입을 정의하는 방법

- 타입 주석(type annotation): name**: type**

<br />

### 👀 null 타입이 아닌, 다른 타입에 null 값을 잠시 넣고 싶을 때

- “strictNullCheck” : “false”
- strick가 strictNullCheck의 상위 개념이기 때문에, 기본적으로 strictNullCheck는 strict의 값을 따라감.

<br />

### 👀 literal(값) 타입

- 변수의 타입을 변수 값으로 선언
- 복합적인 타입을 만들 때 유용하게 사용 가능

```tsx
let a: 10 = 10;

a = 12; // ← 에러 발생

let stringA: "hello" = "hello";

stringA = "bye"; // ← 에러 발생
```

<br />

### 👀 배열

- 일반적인 선언 방식

```tsx
// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hi", "hello", "bye"];
```

- `generic` 방식으로 선언

```tsx
let boolArr: Array<boolean> = [true, false, true];
```

- 배열에 들어가는 요소들의 타입이 다양할 경우, union 타입 활용 가능
- `union type`: `|` 활용하여 여러 개의 타입을 허용해주는 방식

```tsx
let multiArr: (number | string)[] = [1, "hello"];
```

- 다 차원 배열의 타입 정의

```tsx
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];
```

<br />

### 👀 튜플

- `길이`와 `타입`이 `고정`된 배열
- 길이/ 타입을 다르게 `변경 불가`
- 컴파일 후 반환된 js 파일을 열어보면, **타입이 지워지지 않고** 배열로 표기되어 있음
- 배열 메서드(push, pop 등) 사용 시, 튜플의 길이 제한 관련 어떠한 에러도 발생하지 않음 (튜플 사용 시, 유의하기!)
- 인덱스 위치에 따라 넣어야 하는 값의 타입이 정해져 있고 해당 순서를 지켜야 할 때, 유용하게 사용 가능

```tsx
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "2", true];
```

<br />

### 👀 객체

- 객체 리터럴 타입 활용
- 구조적 타입 시스템(Property Based TS): ts는 객체의 구조(property)를 기준으로 타입을 정의함

```tsx
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
```

- readonly: property를 정의할 때 readonly를 붙여주면 값 변경을 방지할 수 있음

```tsx
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY_API_KEY",
};

config.apiKey = "hacked"; // ← 에러 발생
```

<br />

### 👀 타입 별칭

- 공통적으로 적용되는 타입이 많아질 때 적용
- 동일한 스코프에 동일한 이름으로 선언 시 에러 발생

```tsx
type User = {
  id: number;
  nickname: string;
  name: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "aroom",
  nickname: "arooming",
  birth: "2000.10.23",
  bio: "hi",
  location: "seoul",
};

let user2: User = {
  id: 2,
  name: "aroom",
  nickname: "arooming",
  birth: "2000.10.23",
  bio: "hi",
  location: "seoul",
};
```

<br />

### 👀 인덱스 시그니처

- key와 value의 규칙을 기준으로, 객체의 타입을 지정할 수 있는 문법

```tsx
type CountryCodes = {
  [key: string]: string;
};

let CountryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
```

<br />

### 👀 enum

- 여러가지 값들에 각각 이름을 부여해서 열거해두고 사용하는 타입
- 특이하게도 컴파일 후 반환된 js에서도 enum이 사라지지 않고, js의 객체로 반환됨

```tsx
// 숫자형 enum
enum Role {
  // 숫자를 직접 할당해주지 않아도 맨 위의 변수부터 0, 1, 2 ... 이런 식으로 숫자 할당됨
  // 10부터 시작하고 싶으면 ADMIN = 10-> 나머지는 자동으로 +1씩 할당됨
  ADMIN,
  USER,
  GUEST,
}

// 문자형 enum
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "aroom",
  //   role: 0, // 0 <- 관리자
  role: Role.ADMIN,
  Language: Language.korean,
};

const user2 = {
  name: "jayden",
  //   role: 1, // 1 <- 일반 유저
  role: Role.USER,
  Language: Language.english,
};

const user3 = {
  name: "kelly",
  //   role: 2, // 2 <- 게스트
  role: Role.GUEST,
  Language: Language.korean,
};

console.log(user1, user2, user3);
```

```tsx
// 실행결과
{ name: 'aroom', role: 0 } { name: 'jayden', role: 1 } { name: 'kelly', role: 2 }
```

<br />

### 👀 any

- 특정 변수의 타입을 확실히 모를 때 사용
- 모든 타입의 변수에 할당 가능
- 타입 검사를 모두 통과시켜주는 치트키 같은 존재이지만, 결국은 타입 검사를 안 하는 것과 같음
- 컴파일 과정에서 오류가 있는 코드도 통과시켜주기 때문에, 런타임에 에러가 발생함 (최악)

```tsx
let anyVar: any = 10;
let num: number = 10;

// 어떤 타입의 변수에도 할당 가능
num = anyVar;
```

<br />

### 👀 unknown

- any와 비슷하지만 다른 타입의 변수 어느 곳에도 할당될 수 없기 때문에, any보다 안전함

```tsx
let unknownVar: unknown;
let num: number = 10;

// 에러 발생
num = unknownVar;
```

<br />

### 👀 void

- void로 선언된 변수에는 undefined만 할당 가능

```tsx
let a: void;
a = undefined;
```

<br />

### 👀 never

- 존재하지 않는/ 불가능한 타입
- 절대 정상적으로 함수가 종료될 수 없어서, 이 함수에 반환 값이 있는 것 자체가 모순일 경우 사용
- undefined, null, any 등 어떠한 값도 저장할 수 없음!

```tsx
function func2(): never {
  while (true) {}
}

function func3(): never {
  // 이게 실행되면 바로 프로그램이 중지되기 때문에 never를 반환하는게 맞음
  throw new Error();
}

// undefined, null, any 등 어떠한 값도 저장할 수 없음!
let ab: never;
```

<br />

<hr/>

## 📚 Reference

[https://www.inflearn.com/course/한입-크기-타입스크립트/dashboard](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)