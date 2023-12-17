const USER_INFO = [
    {
      imgSrc:
        "https://item.kakaocdn.net/do/dc9561970173c28a13654c3f14180b4bf43ad912ad8dd55b04db6a64cddaf76d",
      name: "rooming",
      age: 24,
      job: "student",
    },
  ];
  
  const UserInfo = () => {
    return (
      <div>
        {USER_INFO.map((info, idx) => {
          return (
            <div key={idx}>
              <img src={info.imgSrc} />
              <p>name: {info.name}</p>
              <p>age: {info.age}</p>
              <p>job: {info.job}</p>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default UserInfo;
  