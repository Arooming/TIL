// 타입 별칭
// 공통적으로 적용되는 타입이 많아질 때 적용하면 유용함
// 동일한 스코프에 동일한 이름으로 선언 시, 에러 발생
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

// 인덱스 시그니처: key와 value의 규칙을 기준으로 객체의 타입을 지정할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let CountryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};
