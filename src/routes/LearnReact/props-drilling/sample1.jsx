import { useState } from "react";

const PDsample1 = () => {
  const [text, setText] = useState("");
  const name = {
    f: "찬희",
    l: "강",
  };
  return (
    <div>
      <h1>sample1</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      {/* 2. 컴포넌트를 불러오는 곳에서 정확한 속성을 입력해준다. */}
      <SampleInput text="너는 개가 되어라" />
      <SampleInput text="너는 병아리다" />
      <SampleInput text="" />
      <SampleOB f={name.f} l={name.l} {...name} />
      <SampleInput />
    </div>
  );
};
// 1. 컴포넌트를 만드는 곳에서 인자값으로 받아올 속성을 정해준다.
export default PDsample1;
const SampleInput = ({ text }) => {
  //   3. 컴포넌트의 인자를 정할 때 js에서는 타입을 지정할 수 없다. 그래서 좀 불편.
  return (
    <div>
      <p>
        <b>{text}</b>
      </p>
      <Item text={text} />
    </div>
  );
};

const Item = ({ text }) => {
  return <div>{text}</div>;
};

// 내가 방아야할 인자값과 전달해야하는 값이 동일한 객체 형태일 때에만 {...값} 으로 전달 받을 수 있다.
const SampleOB = ({ f, l }) => {
  return (
    <div>
      {l}
      {f}
    </div>
  );
};

// 객체를 받아올 때 [] 가 아닌 그냥 () 안에다가 바로 인자를 선언해서 가져오면 됨
// const { f, l } = name;

// props-drilling 을 할 때 리액트 컴포넌트 끼리 주고받는 값은 객체이다.
