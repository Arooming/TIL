**[📆 2023-06-27 TIL]**

<br/>

# 📍상태관리 라이브러리

# 🪢 Redux

- `JS 기반` 상태 관리 라이브러리
- 사용량이 압도적으로 높은 만큼, `안전성` 보장
- `보일러 플레이트 코드` 양이 너무 많음.
  - 작은 기능 하나를 추가하더라도 여러 줄의 코드 필요
- `러닝 커브` 높음.
- 하나의 파일(store)에서 상태를 관리하기 때문에, **버그 발생 시 추적이 쉽고 관리가 용이함**
- Redux DevTools를 활용하면 `디버깅`이 쉽다.
  - 앱의 상태가 언제, 어디서, 왜, 어떻게 바뀌었는지 쉽게 추적 가능
- `대규모 프로젝트`에서 많이 쓰임

<br/>

## 💡Store, Action, Reducer

### 🏠 Store

- `상태가 관리`되는 하나의 공간
  - **컴포넌트와 별개**로 Store라는 공간에 상태를 담아두고, 관리한다.
  - 컴포넌트에서는 상태가 필요할 때, 스토어에 접근한다.

<br/>

### 📜 Action

- 앱에서 Store에 운반할 `데이터 (주문서)`
- JS 객체 형식
  ```tsx
  {
    type: 'ACTION_CHANGE_USER', // 필수
    payload: { // 옵션
      name: '하나몬',
      age: 100
    }
  }
  ```

<br/>

### 💌 Reducer

- Action을 `Store에 전달하기 위해` 거쳐야 하는 곳
- **Action → Reducer에 전달 → Store에 상태 업데이트**
- Action → Reducer에 전달하기 위해서는 `dispatch()` 메소드 사용해야 함.

<br/>

## ✅ 결론

1. Action 객체 → dispatch() 메소드에 전달됨
2. dispatch(Action) 통해 Reducer 호출
3. Reducer → 새로운 Store 생성

![img](https://i0.wp.com/hanamon.kr/wp-content/uploads/2021/07/%E1%84%85%E1%85%B5%E1%84%83%E1%85%A5%E1%86%A8%E1%84%89%E1%85%B3-%E1%84%89%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A2%E1%84%80%E1%85%AA%E1%86%AB%E1%84%85%E1%85%B5-%E1%84%83%E1%85%A9%E1%84%89%E1%85%B5%E1%86%A8%E1%84%92%E1%85%AA.png?w=944&ssl=1)

---

# 🪢 Recoil

- `React 상태 관리 라이브러리`
- `직관적`이기 때문에, 비교적 사용자 친화적임.
- **get/ set** 인터페이스 사용 → `boilerplate-free API` 제공
- `러닝 커브` 낮음.
- `data-flow graph`\***\*:\*\*** 상태 데이터가 **atom → selector → 컴포넌트** 순서로 흐름
- **컴포넌트 수정 없이** 동기/ 비동기 식 전환 가능

<br/>

## 💡 Atoms, Selectors

### 🫧 Atoms

- 상태의 단위
- 업데이트/ 참조 가능
- **atom 업데이트 → 구독된 컴포넌트는 새로운 값을 반영 → 리렌더링**
- `런타임`에서도 생성 가능
- `React의 state 대신` 사용 가능
- **동일한 atom**이 여러 컴포넌트에서 사용 → `모든 컴포넌트`는 `상태를 공유`함.
- Atoms는 atom 함수를 사용해 생성

```tsx
const fontSizeState = atom({
  key: "fontSizeState",
  default: 14,
});
```

<br/>

- `고유한 키` 값 필요
- `useRecoilState` 훅을 통해 atom 읽고 쓰기 가능
  - useState와 비슷하지만, **컴포넌트 간의 상태가 공유**될 수 있다는 차이.
  ```tsx
  function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return (
      <button
        onClick={() => setFontSize((size) => size + 1)}
        style={{ fontSize }}
      >
        Click to Enlarge
      </button>
    );
  }
  ```

<br/>

### 👀 Selectors

- atoms나 다른 selectors를 입력으로 받아들이는 순수 함수
- `atom 상태 값`을 동기/ 비동기 방식을 통해 `변환`
- **상위 atoms/ selectors 업데이트 → 하위의 selector도 다시 실행됨**
- 참조 가능
- **selectors 변경 → 컴포넌트 리렌더링**
- 최소한의 상태 집합만 atoms에 저장 → 다른 모든 파생 데이터 → selectors에 명시한 함수를 통해 효율적 계산 가능
- 어떤 컴포넌트가 `자신을 필요`로 하는지, 어떤 `상태에 의존`하는지 `추적`
- 컴포넌트의 관점)) selectors, atoms는 동일한 인터페이스 가짐 → 서로 대체 가능
- Selectors는 selector 함수를 사용해 생성

```tsx
const fontSizeLabelState = selector({
  key: "fontSizeLabelState",
  get: ({ get }) => {
    // fontSizestate라는 하나의 atom에 의존성을 가짐
    const fontSize = get(fontSizeState);
    const unit = "px";

    return `${fontSize}${unit}`;
  },
});
```

```tsx
function FontButton() {
  const [fontSize, setFontSize] = useRecoilState(fontSizeState);
  // Selectors는 useRecoilValue() 통해 읽을 수 있음
  // fontSizeLableState는 writable 하지 않기 때문에 useRecoilState()를 이용하지 않음!
  const fontSizeLabel = useRecoilValue(fontSizeLabelState);

  return (
    <>
      <div>Current font size: ${fontSizeLabel}</div>

      <button onClick={setFontSize(fontSize + 1)} style={{ fontSize }}>
        Click to Enlarge
      </button>
    </>
  );
}
```

<br />

<hr/>

## 📚 Reference

[Redux - 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너. | Redux](https://ko.redux.js.org/)

[Redux(리덕스)란? (상태 관리 라이브러리) - 하나몬](https://hanamon.kr/redux란-리덕스-상태-관리-라이브러리/)

[주요 개념 | Recoil](https://recoiljs.org/ko/docs/introduction/core-concepts)
