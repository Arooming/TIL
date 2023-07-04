**[📆 2023-07-03 TIL]**

<br/>

**💥기능 구현**

- 소셜 로그인 PreTask
  - client ID, redirect url 활용하여 URL 생성 (→ 카카오 이미지 클릭 시, 해당 주소로 이동)
    - `prompt=login` : 기존 사용자 인증 여부와 상관없이, 로그인 화면 출력함
      - 해당 옵션이 없으면 기존 사용자는 인증하지 않고 바로 인가코드 발급됨 (이번엔 테스트를 위해서 설정해줬슴당)
    - 인가코드 활용하여 access_token, refresh_token, 유저 정보 받아오기 성공

대략 요런 느낌으로 구현했습니당!

![image](https://github.com/Arooming/TATTOUR-PreTask/assets/80264647/477c01a5-8bb6-4b1d-b6fe-d8b336e45374)

![image](https://github.com/Arooming/TATTOUR-PreTask/assets/80264647/875eb6d7-d0cc-4107-b308-c1ddd0cb2f81)

![image](https://github.com/Arooming/TATTOUR-PreTask/assets/80264647/ff612feb-d57c-476a-91fe-8e244af07432)

<br />
<hr />

**👀 코드 첨부**

https://github.com/Arooming/TATTOUR-PreTask

<br />
<hr />

**📖 reference**

- https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api
- https://velog.io/@adguy/%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EA%B5%AC%ED%98%84web%EC%9A%B0%EB%A6%AC%EB%82%98%EB%9D%BC%EC%97%90%EC%84%9C-%EA%B0%80%EC%9E%A5-%EC%89%BD%EA%B2%8C-%EC%95%8C%EB%A0%A4%EC%A3%BC%EA%B8%B0React-restAPI-%EB%B0%A9%EC%8B%9D
