"use client";

import BookMarkUI from "./_components/bookmark";
import InfoUI from "./_components/info";
import PasswordUI from "./_components/password";
import PointUI from "./_components/point";
import { withLogin } from "@/commons/hocs/withLogin";
import { useMyPage } from "./_components/hook";

function MyPage() {
  const { active, setActive } = useMyPage();

  return (
    <div className="row__sort row__center">
      <div className="width__1280px padding__40__20 column__sort gap__40">
        <h1 className="f__28 w__700 l__36">마이페이지</h1>
        <InfoUI active={active} setActive={setActive} />
        {active === "bookmark" ? <BookMarkUI /> : active === "point" ? <PointUI /> : <PasswordUI />}
      </div>
    </div>
  );
}

export default withLogin(MyPage);
