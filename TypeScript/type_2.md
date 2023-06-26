**[📆 2023-06-25 TIL]**

<br/>

# 📍 Cannot redeclare block-scoped variable 'a'.

- 동일한 이름의 변수를 같은 스코프 내에서 반복해서 선언할 수 없음을 나타내는 오류

```tsx
// 이런 식으로 같은 스코프에 동일한 이름의 변수를 선언했을 때 발생하는 에러
index.ts line 1 >> const a = 1;
hello.ts line 1 >> const a = 1;
```

<br />

## 📍 해결 방법

1. **export {}; 활용**
    
    → 해당 파일을 독립된 파일로 봐서 위의 에러가 발생하지 않음.
    
2. **tsconfig.json에 "moduleDetection" 옵션 추가**
    
    → ts가 각각의 파일을 어떤 모듈로 감지할 것인지 정해주는 옵션
    
    → "moduleDetection": "force”
    
    → 컴파일러가 export {}; 자동으로 추가해줌
    

<br />

## ☑️ 결론

모든 ts 파일은 `전역(global) 모듈`로 취급 받기 때문에, 파일이 다르더라도 같은 스코프에 중복된 변수를 선언하면 오류가 발생한다!

<br />

이를 해결하기 위해서는 각각의 `ts 파일을 개별 모듈로` 만들어 줘야 한다.

1. 각각의 ts 파일에 import/ export 같은 **모듈 시스템 키워드**를 하나 이상 사용한다.
2. tsconfig.json에 **"moduleDetection"** 옵션을 **"force"**로 선언한다.
    1. tsconfig.json에 "moduleDetection" 옵션을 "force"로 선언한다.
    2. 모든 ts 파일이 개별 모듈로 취급된다.

<br />

<hr/>

## 📚 Reference

[https://www.inflearn.com/course/한입-크기-타입스크립트/dashboard](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%ED%81%AC%EA%B8%B0-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8/dashboard)