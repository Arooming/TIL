const USER_INFO = [
    {
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