// Props Drilling
// 다른 곳에서 아래의 컴포넌트를 불러 쓸 때 전달해주는 값

import OpenColor from "open-color";

const Button = (onClick, type, children, style) => {
  return (
    <button
      onClick={onClick}
      type={type ?? "button"}
      style={{
        padding: "5px 10px",
        background: OpenColor.red[7],
        fontSize: size === "sm" ? 12 : size === "lg" ? 20 : 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        ...style, // ...변수명 복사하기 객체를 복사할 때는 {} 안에 ..., 배역을 복사할 때는 [] 안에 ...
      }}
    >
      {/*  조건 ?? 연산자 <===> 조건 && 연산자 */}
      {/*  앞의 조건이 부합하지 않을 때 실행하는 코드를 ?? 오른편에 작성 */}
      {children ?? "Button"}
    </button>
  );
};

// 핸드폰 버튼 => 2,3가지
// 1. 클릭했을 때 투명도 변함
// 2. 클릭했을 때 색깔이 조금 변함
// 3. 아무 변화 없음
export { Button };

const FlexBox = () => {
  return <div></div>;
};
