import { useEffect, useNavigate } from "react";
import { HiLanguage } from "react-icons/hi2";
import { RiNetflixFill } from "react-icons/ri";
import OpenColor from "open-color";
import { useLocation } from "react-router-dom";
import { user } from "../../assets/fakebase";
import { Button } from "../ul/Button";

const Header = () => {
  // const navi = useNavigate();

  // const location = useLocation()
  // const pathname = location.pathname << 두줄을 밑에 한줄로 코딩가능
  const { pathname } = useLocation();

  const onT = () => {
    navi("/login");
  };
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  // [] dependency 의존성
  return (
    <header
      className="flex justify-between items-center fixed top-0 left-0 w-full text-gray-100 z-50 "
      style={{
        borderBottom: `1px solid ${OpenColor.gray[6]}`,
        height: "auto",
        paddingRight: 10,
        borderColor: OpenColor.gray[1],
      }}
    >
      <button
        className="h-10 px-2.5 text-xl text-red-600 "
        style={{
          fontSize: 20,
          color: OpenColor.red[8],
          padding: "20px 10px",
          height: "auto",
        }}
      >
        <RiNetflixFill />
      </button>
      <ul
        className="flex gap-x-2.5 bg-gray-900"
        style={{
          display: "flex",
          columnGap: 10,
          alignItems: "center",
          backgroundColor: OpenColor.gray[9],
        }}
      >
        <li>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              border: "1px solid",
              borderRadius: 4,
            }}
          >
            <HiLanguage />
            언어
          </button>
        </li>
        {/*  조건 $$ 연산자 === 앞의 조건에 부합할 때 실행할 코드를 && 오른푠에 적어줍니다.  */}
        {/*  조건 ? : 연산자 === 앞의 조건에 부합할 때 실행할 코드는 ? 오른편에, 앞에 조건에 부합하지 않을 때 실행할 코드는 : 오른편에 */}
        {(pathname !== "/login" || (!user && pathname !== "/login")) && (
          <li>
            <button
              style={{
                padding: "5px 10px",
              }}
              onClick={onT}
            >
              로그인
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
