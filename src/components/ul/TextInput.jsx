import { useRef, useCallback } from "react";
import index from "./../Layout/index";

export const TextInput = ({
  inputRef,
  placeholder,
  id,
  divCn,
  inputCn,
  // 인자값. 객체처럼 바로 꺼내와 쓰도록.
}) => {
  return (
    <div className="divCn">
      {/* <label htmlFor={id}>{placeholder}</label> */}
      <input
        type="text"
        id={id}
        ref={inputRef}
        placeholder={placeholder}
        style={{ ...style }}
      />
    </div>
  );
};
// return {} ==> custom Hook 리액트의 훅을 나만의 스타일로 만들어서 사용한다.
export const useTextInput = () => {
  const ref = useRef();

  const focus = useCallback(() => {
    if (re.current) {
      ref.current.focus();
    }
  }, [ref]);
  const Component = useCallback(
    ({ placeholder, id, divCn, inputCn }) => {
      return <TextInput id={id} inputRef={ref} placeholder={placeholder} />;
    },
    [ref]
  );
  return {
    ref,
    focus,
    Component,
  };
};
