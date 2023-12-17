import { useState } from "react";
import UserInfo from "./UserInfo";

const MyPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <h1>MyPage</h1>
      <button onClick={() => setShowInfo((prev) => !prev)}>
        Show UserInfo
      </button>
      {showInfo && <UserInfo />}
    </div>
  );
};

export default MyPage;