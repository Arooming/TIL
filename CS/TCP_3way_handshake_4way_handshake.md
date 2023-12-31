# 📑 **TCP 3-way handshake와 4-way handshake: 연결 설정과 해제 과정**

## 🌟 **TCP란? (Transmission Control Protocol)**

인터넷 상에서 데이터를 메시지 형태로 보내기 위해 **IP와 함께 사용하는 프로토콜**을 말한다.

즉, 클라이언트와 서버가 연결된 상태에서 데이터를 주고 받는 `연결 지향적 프로토콜`이라고 할 수 있다.

일반적으로 TCP는 IP와 함께 사용되며 **IP**는 `배달`을, **TCP**는 `패킷의 추적 및 관리`를 하게 된다.

TCP는 연결형 서비스로, `신뢰적인 전송을 보장`하기 때문에 데이터의 흐름제어와 혼잡제어를 수행한다.

<br />

### 👣 TCP 특징

- `3-way handshake` 과정을 통해 연결을 `수립`하고, `4-way handshake`을 통해 연결을 `해제`한다.
- 연결 지향적 → 상대방이 내 신호를 받을 수 있는지 확인하고 전송
- 높은 신뢰성 보장
- 흐름 제어 및 혼잡 제어 수행

<br />

### 👣 TCP 작동 방식 (큰 틀)

- 데이터 전송 전, 3-way handshake → 논리적 접속 성립
    - 모든 데이터는 고정된 통신 선로를 통해 전달 됨
- 데이터 전송이 끝나면 4-way handshake → 데이터가 모두 전달됐는지 확인 → 연결 해제

따라서, TCP는 서버와 클라이언트 간의 데이터를 신뢰성 있게 전달하기 위해 만들어진 프로토콜이다.

데이터를 정확하고 안정적으로 전달할 수 있기 때문에 높은 신뢰성을 보장한다.

<br />

---

## 🌟 **TCP 3-way handshake 란?**

- 전송제어 프로토콜(TCP)에서 통신하는 장치 간 연결이 잘 되었는지 확인하는 과정/ 방식.
- TCP/IP 4계층을 통과, 데이터를 보낼 준비가 되면 수신 측이 받을 준비가 되었는지 확인하는 과정.
- 3-way handshake를 수행하기 위해서는 TCP 헤더에 표시한 `SYN`과 `ACK` 플래그들이 사용됨.

<br />

### 👣 3-way handshake 과정

![3way handshake](/CS/media/3way%20handshake.png)

1. 클라이언트 → 서버에 접속 요청 메시지 SYN(x) 패킷 전송.
    - `SYN`(Synchronize Sequence Number): 임의의 랜덤 숫자
2. 서버 → SYN(x) 받음 → 클라이언트에게 연결요청 메시지 ACK(x+1) + SYN(y) 패킷 전송.
    - `ACK`(Acknowledgement number: SYN+1의 값
3. 클라이언트 → ACK(x+1) + SYN(y) 받음 → 서버에 ACK(y+1) 전송.

⇒ 3️⃣번의 통신 완료 후, `연결 성립(Established)`

<br />

---

## 🌟 **TCP 4-way handshake 란?**

- 연결 성립 후, 모든 통신이 끝났다면 이를 해제해야 함.
- 전송제어 프로토콜(TCP)에서 `통신을 중단`할 때 사용하는 과정/ 방식
    - 연결 중단 시, 한 번 더 확인 후 해제
- 데이터 송수신이 완료되면 `TCP 연결을 해제`하는 과정
- 4-way handshake를 수행하기 위해서는 TCP 헤더에 표시한 `ACK`와 `FIN` 플래그들이 사용됨.

<br />

### 👣 TCP 4-way handshake 과정

![4way handshake](/CS/media/4way%20handshake.png)

1. 클라이언트 → 서버에게 연결 종료를 알리는 FIN 플래그가 설정된 패킷 전송.
    - `FIN` (finish): 세션을 종료시키는데 사용됨, 더이상 보낸 데이터가 없음을 의미
2. 서버 → FIN 신호 확인 → 확인했다고 알려주기 위해 ACK 신호 전송.
    - 이때, 모든 데이터를 보내기 위해 CLOSE_WAIT 상태 돌입.
3. 서버 통신 끝 → 연결 종료 요청 합의의 의미로 클라이언트에게 FIN 플래그가 설정된 패킷 전송.
4. 클라이언트 → FIN 받음 → 확인의 의미로 ACK 플래그가 설정된 패킷 보냄
    - 아직 서버로부터 받지 못한 데이터가 있을 수 있으므로 TIME_WAIT을 통해 기다림
    - TIME_WAIT: 의도치 않은 에러로 인해 연결이 데드락으로 빠지는 것 방지 목적
        - 에러 발생 → 종료 지연 → 타임 초과 → CLOSED 상태로 변경
    - 서버 → ACK 받은 이후 소켓 닫음 (Closed)
    - 클라이언트 → TIME_WAIT 시간이 끝나면 클라이언트 닫음(Closed)

⇒ 4️⃣번의 통신 이후, `연결 해제`