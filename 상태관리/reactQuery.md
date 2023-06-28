# 💎 React query

- fetching, caching, 서버 데이터와의 동기화를 지원해주는 라이브러리
- `비동기 처리를` 쉽게 관리할 수 있는 라이브러리
- `Client state`에 적합한 라이브러리
- react component 내부에서 간단하고 직관적으로 api 사용 가능
- api 요청 관련 번잡한 작업 없이 “핵심 로직”에 집중 가능

<br />

### 0️⃣ 상태

- `fresh`
    - 요청이 **만료되지 않은** 쿼리
    - 새롭게 **추가**된 쿼리
    - **최신** 상태의 쿼리
    
    <br />
    
- `fetching`
    - **요청 중**인 쿼리

<br />

- `stale`
    - 요청이 **만료**된 쿼리
    - **기존** 상태의 쿼리
    

<br />

- `inactive`
    - **비활성화**된 쿼리

<br />

## 1️⃣ 캐싱

- 데이터 캐싱 (특정 데이터의 복사본 저장 → 동일한 데이터에 재접근 속도 높이는 것)
- 반복적인 비동기 데이터 호출 방지 → 불필요한 api 콜 줄임 → 서버에 대한 부하 줄일 수 있음.
- 데이터를 캐싱했는데 해당 데이터의 상태가 변경되기 전의 내용을 가지고 있는 상황이 발생하지 않도록, 필요한 상황에 적절히 `데이터를 갱신`해야 함.
    1. 화면을 보고 있을 때
    2. 페이지 전환이 일어났을 때
    3. 페이지 전환없이 이벤트가 발생해 데이터 요청할 때
- react query에서는 `어떤 시점`에 데이터를 `refetching` 하는지 알 수 있는 `옵션`을 제공함.
    - `refetchOnWindowFocus`: 브라우저에 포커스가 들어온 경우
    - `refetchOnMount`: 새로운 컴포넌트 마운트가 발생한 경우
    - `refetchOnReconnect`: 네트워크 재연결이 발생한 경우

<br />

### ➡️ staleTime & cacheTime

- `staleTime`
    - 데이터가 fresh → stale 상태로 변경되는 데 걸리는 시간
    - fresh 상태 → refetch 트리거 (위의 3가지 상태) 발생해도 refetch 일어나지 X!!
    - 기본 값: 0
    - 따로 설정해주지 않는다면, refetch 트리거 발생 → 무조건 refetch
- `cacheTime`
    - 데이터가 inactive한 상태일 때 캐싱된 상태로 남아있는 시간
    - 특정 컴포넌트 unmount → 사용된 데이터는 inactive 상태로 전환 → cacheTime만큼 데이터 유지
    - cacheTime 이후 데이터 → 가비지 콜렉터로 수집 → 메모리에서 해제
    - cacheTime이 모두 지나기 전, 컴포넌트가 다시 mount → 새로운 데이터를 fetch 해오는 동안 캐싱된 데이터 보여줌
    - 즉, `fetch 하는 동안만`! 캐싱된 데이터를 `임시로` 보여주는 것!

⇒ 사용자가 `특정 이벤트`가 발생했을 때 `refetching` 하도록 설정할 수 있음!

<br />

## 2️⃣ Client Data & Sever Data

- `Client Data`
    - 상태 관리 라이브러리가 관리
    - 세션 간 지속되지 않는 데이터
    - 클라이언트가 소유하는 데이터
    - ex) 컴포넌트의 state, 동기적으로 저장되는 redux store의 데이터
- `Sever Data`
    - react query가 관리
    - 세션 간 지속되는 데이터
    - 비동기적이며, 여러 클라이언트에 의해 수정, 공유되는 데이터
    - ex) 비동기 요청으로 받아올 수 있는 백엔드 DB에 저장되어 있는 데이터
- onError, onSuccess 등의 함수를 통해 데이터 fetch 성공, 실패에 대한 분기를 간단히 구현 가능

```jsx
const { data, isLoading } = useQueries(
	['unique-key'],
	() => {
		return api({
			url: URL,
			method: 'GET',
		});
	},
	{
		onSuccess: (data) => {
			// data로 이것저것 하는 로직
		}
	},
	{
		onError: (error) => {
			// error로 이것저것 하는 로직
		}
	}
)
```

<br />

## 3️⃣ 대표적인 기능들

> 💡 기본적으로 `GET - useQuery` / `PUT, UPDATE, DELETE - useMutation` 사용
> 

<br />

### ❇️ useQuery

- **첫 번째 파라미터**: unique key를 포함한 배열 (동일한 쿼리를 불러올 때 유용하게 사용 가능)
    - 배열의 첫 요소: unique key
    - 배열의 두 번째 요소 ~ : query 함수 내부의 파라미터
- **두 번째 파라미터**: 실제 호출하고자 하는 비동기 함수 (함수는 Promise를 반환하는 형태)
- **최종 반환 값**: API 성공/ 실패 여부, 반환 값을 포함한 객체

```jsx
// useQuery 활용 코드
const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })
```

```jsx
// 전체 예시 코드
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  )
}

function Example() {
	// data를 통해, fetch 성공 시 데이터 반환 가능
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })

	// isLoading을 통해 로딩 여부를 알 수 있음
  if (isLoading) return 'Loading...'

	// error를 통해 에러 발생 여부를 알 수 있음
  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
```

<br />

### ❇️ useMutation

- PUT, UPDATE, DELETE와 같이 `값을 변경할 때` 사용하는 api
- **첫 번째 파라미터**: 비동기 함수
- **두 번째 파라미터**: 상황 별 분기 설정
- **최종 반환 값**: API 성공/ 실패 여부, 반환 값을 포함한 객체 (useQuery와 동일)

```jsx
// useMutation 활용 코드
const mutation = useMutation({
    mutationFn: (newTodo) => {
      return axios.post('/todos', newTodo)
    },
  })
```

```jsx
// 전체 예시 코드
function App() {
  const mutation = useMutation({
    mutationFn: (newTodo) => {
			// 처음에 post 비동기 함수를 넣어줌
      return axios.post('/todos', newTodo)
    },
  })

  return (
    <div>
      {mutation.isLoading ? (
        'Adding todo...'
      ) : (
        <>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          {mutation.isSuccess ? <div>Todo added!</div> : null}

          <button
            onClick={() => {
							// 첫 번째 인자로 api 호출 시 전달해야 할 데이터 넣어주기!
              mutation.mutate({ id: new Date(), title: 'Do Laundry' })
            }}
          >
            Create Todo
          </button>
        </>
      )}
    </div>
  )
}
```

<br />

### ✅ 추가 내용

**📚 useQuery 동기적 실행**

- `enabled` 옵션 사용
    - enabled에 값 대입 → 해당 값이 true일 때 → useQuery 비동기 실행 가능!
    
    ```jsx
    const { data: todoList, error, isFetching } = useQuery("todos", fetchTodoList);
    const { data: nextTodo, error, isFetching } = useQuery(
      "nextTodos",
      fetchNextTodoList,
      {
        enabled: !!todoList // true가 되면 fetchNextTodoList를 실행한다
      }
    );
    ```
    

**📚 useQueries**

- 여러 개의 useQuery를 한 번에 실행 가능
- `Promise.all()` 처럼 묶어서 실행할 수 있도록 도와주는 역할!
- 여러 query에 대한 반환 값이 배열로 묶여 반환됨

```jsx
const results = useQueries({
  queries: [
    { queryKey: ['post', 1], queryFn: fetchPost, staleTime: Infinity},
    { queryKey: ['post', 2], queryFn: fetchPost, staleTime: Infinity}
  ]
})
```

**📚 retry**

- 요청이 실패한 경우, 지정한 최대 요청 횟수까지 재요청 보냄 (기본: 3회)
- `retryDelay`: 다음 재요청까지의 딜레이 시간

```jsx
const userQuery = useQuery(['users',1], fetchUsers,
                           { retry : 10, retryDelay : 400});
```

<br />

### 4️⃣ 장점

1. **Devtools**
    - `react-query/devtools` 를 통해 Devtool 지원 → 확실한 데이터 흐름 파악 가능
    - 개발 모드에서만 사용
    - `swr` : devtools 사용 가능하지만, 서드 파티 라이브러리를 이용해야 함!

<br />

1. **무한 스크롤 구현**
    - `getPreviousPageParam`, `fetchPreviousPage`, `hasPreviousPage` 등의 기능을 활용하여 쉽게 무한 스크롤 구현 가능
    - swr을 활용해도 무한 스크롤을 구현할 수 있긴 하지만, 유저가 부가적인 코드를 작성해야 한다는 단점있음

<br />

2. **Selectors**
    - `select` 를 통해 raw data로 부터 원하는 `데이터 추출, 반환` 가능
    
    ```jsx
    import { useQuery } from 'react-query'
    
    function User() {
      const { data } = useQuery('user', fetchUser, {
    		
    		// select 활용
        select: user => user.username,
      })
      return <div>Username: {data}</div>
    }
    ```
    
    <br />
    
3. **Data Optimization**
    - swr과 달리, `쿼리가 업데이트` 될 때만 `refetch` 진행
    - `여러 컴포넌트`에서 **동일한 쿼리** 사용 시, `한 번에 묶어` 업데이트 진행
    - 이를 통해 렌더링 퍼포먼스 개선 가능!
    
    <br />
    
4. **Garbage Collection**
    - 지정 시간(기본 5분)동안 쿼리가 사용되지 않을 경우, 메모리 해제 → `Auto Garbage Collection` → 메모리 관리


<br />

<hr/>

## 📚 Reference

https://tanstack.com/query/latest/docs/react/overview?from=reactQueryV3&original=https%3A%2F%2Ftanstack.com%2Fquery%2Fv3%2Fdocs%2Foverview

https://velog.io/@seohee0112/React-Query

[https://velog.io/@kandy1002/React-Query-푹-찍어먹기](https://velog.io/@kandy1002/React-Query-%ED%91%B9-%EC%B0%8D%EC%96%B4%EB%A8%B9%EA%B8%B0)