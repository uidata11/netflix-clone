import { useMemo, useState, useCallback } from "react";

const LearnUseMemo = () => {
  // const 변수명 = useMemo()
  // const 변수명 = useMemo(
  // () => {}, []  )
  // 안에 콜백함수와 의존성을 넣어줘야합니다. 쉼표로구분.

  //1. 초기값으로 사용하는 경우
  const initialState = useMemo(() => {
    return 0;
  }, []);

  const [state, setState] = useState(initialState);

  const stateMessage = useMemo(() => {
    if (state === 0) {
      return "상품 담아요";
    }
    if (state > 10) {
      return "10개이상 ㄴㄴ";
    }
    return null;
  }, [state]);

  //   const onSubmit = (e) => {
  //     e.preventDefault();

  //     console.log(state, stateMessage, initialState);
  //   };
  const ref = useRef();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (stateMessage) {
        alert(stateMessage);
        setTimeout(() => {
          ref.current.showPicker();
        }, 500);
        return;
      }
      alert(`상품을 ${state}`)
    }
    [state, stateMessage, ref]
  );

  return (
    <div>
      <form action="" onSubmit={onsubmit}></form>
      <select name="" id="" onChange={(e) => setState(Number(e.target.value))} ref={ref} value={state}>
        <option value=""></option>
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
      <button>주문하기</button>
    </div>
  );
};

export default LearnUseMemo;

const getMessage = () => {};
