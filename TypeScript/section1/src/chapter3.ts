// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 특이하게도, 컴파일 후 반환된 js에서도 enum이 사라지지 않고 js의 객체로 반환됨!

// 숫자형 enum
enum Role {
  // 숫자를 직접 할당해주지 않아도 맨 위의 변수부터 0, 1, 2 ... 이런 식으로 숫자 할당됨
  // 10부터 시작하고 싶으면 ADMIN = 10-> 나머지는 자동으로 +1씩 할당됨
  ADMIN,
  USER,
  GUEST,
}

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
