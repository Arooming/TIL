## 💎 SWR

- 데이터 가져오기를 위한 react hook
- 캐시(stale)로부터 데이터 반환 → fetch 요청 → 최신화된 데이터 가져오기
- 즉, 다른 컴포넌트에서 동일한 상태를 사용하고자 하는 경우 이전에 캐시했던 상태를 그대로 사용
    - 서버로 재요청 하는 방식 ❌❌
    - 서로 다른 컴포넌트에서 동일한 상태 공유 가능!
- 한 줄의 코드로 데이터 가져오기 가능

<br />

## 💎 SWR ! React Query와 비교하여 자세히 알아보기

🔥 `React Query`

리액트 어플리케이션에서 서버 상태를 가져오고, 캐싱, 동기화, 업데이트하는 것을 쉽게 해줌.

```jsx
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();
const url = "https://61b88c9d64e4a10017d19053.mockapi.io/user";

const App = () => (
  <div>
    <QueryClientProvider client={queryClient}>
      <ReactQueryProfile />
    </QueryClientProvider>
  </div>
);

const ReactQueryProfile = () => {
  const {isLoading, error, data, isFetching} = useQuery("users", () =>
    fetch("https://61b88c9d64e4a10017d19053.mockapi.io/user").then(res => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <Profile library="React Query" data={data} />;
}

const Profile = ({library, data}) => (
  <div>
    <h1>Users from {library}</h1>
    {data.map(user => <p>{user.level} developer <strong>{user.name}</strong></p>)}
  </div>
)

export default App;
```

🌊 `SWR`

캐시에서 데이터를 반환한 후, 서버에 데이터를 가져오는 요청을 보내고, 마지막으로 최신 데이터를 제공함.

```jsx
import useSWR from "swr";

const App = () => (
  <div>
    <SWRProfile />
  </div>
);

const SWRProfile = () => {
  const {data, error} = useSWR("https://61b88c9d64e4a10017d19053.mockapi.io/user", url =>
    fetch(url).then(res => res.json())
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <Profile library="SWR" data={data} />;
}

const Profile = ({library, data}) => (
  <div>
    <h1>Users from {library}</h1>
    {data.map(user => <p>{user.level} developer <strong>{user.name}</strong></p>)}
  </div>
)

export default App;
```

<br />

### Provider

🔥 `React Query`

Provider로 컴포넌트를 감싸지 않을 경우, 에러 발생함.

🌊 `SWR`

별도의 Provider 없이 컴포넌트에서 바로 사용 가능함.

<br />

### Fetcher

> 모두 두 번째 인자로 fetcher를 받음.
> 

🔥 `React Query`

fetcher에 url 직접 전달해야 함.

꼭! 두 번째 인자에 fetcher를 넘겨줘야 함.

🌊 `SWR`

fetcher의 인자로 useSWR의 첫 번째 인자를 넘겨줌.

전역 성정을 통해 fetcher 정해둘 수 있음.

<br />

### Mutation

🔥 `React Query`

post/ patch/ put/ delete를 통해 서버의 상태를 변형시키는 것.

🌊 `SWR`

useSWR()을 통해 받아온 데이터를 클라이언트 사이드에서 변형시켜 업데이트 해주는 것.

<br />

### Selectors

🔥 `React Query`

select를 이용해 데이터를 가공할 수 있음.

🌊 `SWR`

데이터 가공은 불가능함.

<br />

### Offline Mutation

🔥 `React Query`

오프라인 상태에서 뮤테이션을 시도했을 때, 해당 요청을 잠시 멈췄다가 온라인 상태가 되면 요청 재시도함.

🌊 `SWR`

API를 멈췄다가 다시 시도하기 때문에, 서버 데이터를 변경하는 것은 불가능함.

<br />

### Auto Garbage Collection

🔥 `React Query`

지정된 시간(기본 5분)동안 쿼리가 사용되지 않을 경우, 자동으로 가비지 컬렉션 지원.

🌊 `SWR`

SWR에서는 별도로 제공하고 있지 않음.

<br />

<hr/>

## 📚 Reference

https://swr.vercel.app/ko

https://tech.madup.com/react-query-vs-swr/

https://velog.io/@seohee0112/React-Query-vs-SWR