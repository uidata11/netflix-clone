import {} from "react";
import getValue from "./../../../node_modules/jsx-ast-utils/src/values/index";

const TextInput = (inputRef, value, onChanegeText, id, placeholder) => {
  const onChange = (e) => {
    onChanegeText(e.target.value);
  };
  return (
    <div>
      <label htmlFor="{id}">{title}</label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

// 커스텀훅 customHook
const useTextInput = (value, onChanegeText, id, placeholder) => {
  const Input = () => {
    return (
      <TextInput

      // 1. props 를 받는 컴포넌트가 속성으로 많은 개체들을 요구할 때 예)3개 이상
      // 2. 문자열이 아닐때, 객체'{}'로 만들어서 전달해줍니다.

const props = {
  value, onChanegeText, id, placeholder

} 

  
  
  
  
);
  };
  return {
    input,
  };
};

export { TextInput, useTextInput };
