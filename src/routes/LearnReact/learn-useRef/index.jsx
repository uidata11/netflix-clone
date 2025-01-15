import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const LearnUseRef = ({ user }) => {
  // 코드가 길어질 지언정 소도개선에 효과적입니다. 상수는 2번 실행하지만 얘는 한번만 실행하기 때문입니다.
  const initialState = useMemo(() => {
    return 0 + user;
  }, [user]);
  const [state, setState] = useState(0);
  const counting = () => {
    setState((prev) => prev + 1);
  };
  // ref = reference js = document.querySelector()
  const pRef = useRef();

  const checkP = () => {
    if (pRef.current) {
      console.log(pRef.current.innerText);
      pRef.current.innerText = "123123";
    }
  };

  const inputRef = useRef();
  const checkInput = () => {
    console.log(inputRef.current.value);
  };
  const focusInput = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log(state);
  });
  return (
    <div className="bg-gray-200 flex flex-col">
      <h1>useRef</h1>
      <p>{state}</p>
      <button onClick={counting}>++</button>
      <button onClick={checkP}>Check P Tag</button>
      <input type="text" />
      <button onClick={checkInput}>Check input</button>
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
};

export default LearnUseRef;
