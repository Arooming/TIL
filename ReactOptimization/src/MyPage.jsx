import { useState, Suspense, lazy } from "react";

const UserInfo = lazy(() => import("./UserInfo"));

const MyPage = () => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <h1>MyPage</h1>
      <button onClick={() => setShowInfo((prev) => !prev)}>
        Show UserInfo
      </button>
      <Suspense fallback={<div>...Loading</div>}>
        {showInfo && <UserInfo />}
      </Suspense>
    </div>
  );
};

export default MyPage;
