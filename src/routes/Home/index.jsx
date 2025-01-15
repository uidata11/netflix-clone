// import { useTextInput } from "./../components/ul/";
import { useState, useEffect } from "react";
import { useTextInput } from "../../components/ul/TextInput";

const Home = () => {
  const Text = useTextInput();
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(Text.ref.current.value);
  };

  useEffect(() => {
    console.log(Text.ref.current?.value);
  }, [Text]);
  return (
    <div>
      <h1>Home</h1>
      <h1 className="active:text-black">Tailwind</h1>
      <form action=""></form>
      <Text.Component
        id={"text"}
        placeholder={"이메일을 입력하세요."}
        style={{ border: `1px solid ` }}
      />
      <button>시작하기</button>
    </div>
  );
};

export default Home;
