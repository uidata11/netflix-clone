import Item from "./item";
import { useState, useEffect } from "react";

const PropsDriliing2 = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");

  const onSubmit = () => {
    setPeople((p) => [{ name, id: p.length }, ...p]);
  };
  return (
    <div>
      <h1>props-drilling2</h1>
      <p>{fn("sdf", "wqeqweq")}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>추가</button>
      </form>
      {/* map 할때 주의할 점 : key 속성에 넣는 값으로  index ㄴㄴ. 훨씬 더 정교하고 고유하고 반복되지 않을 값을 넣어야 함. 타입은 무조건 문자열 */}
      {people.map((person, index) => {
        return <Item key={person.id} text={person.name} />;
      })}
    </div>
  );
};
export default PropsDriliing2;
// 원시타입 primitive 간단한 친구들.
// string, number, null, undefined

// 객체타입 object ++ 배열 array
//
const fn = (a, b) => {
  //   console.log(typeof "");
  //   console.log(typeof 2);
  //   console.log(typeof null);
  //   console.log(typeof undefined);
  //   console.log(typeof { name: "kch" });
  console.log(typeof ["a", "b"]);
  return a + b;
};
const name = {
  first: "ㅊㅎ",
  last: "ㄱ",
};
const { first, last } = name;

// // console.log(name.last);
// // console.log(name.first);

// console.log(last);
// console.log(first);
