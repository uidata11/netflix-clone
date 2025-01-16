import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const Todo = () => {
  const n = "chan";
  const a = "25";
  const me = { n, a };

  const ob = {
    hei: 177,
    wei: 70,
  };

  function person(name, age) {
    console.log(name);
    console.log(age);
  }
  var obj = { name: "Kim", age: 20 };
  person(obj.name, obj.age);

  return (
    <>
      <button>gd</button>
    </>
  );
};
//   const initialTodos = useMemo(() => {
//     return ["리액트배우기", "개 산책", "깃허브 커밋하기"];
//   }, []);
//   const [todos, setTodos] = useState(initialTodos);
//   const ref = useRef();
//   const [text, setText] = useState("");
//   const message = useMemo(() => {
//     if (text.length === 0) {
//       return "입력해";
//     }
//     const found = todos.find((todo) => {
//       if (todo === text) {
//         return todo;
//       }
//     });
//     if (found) {
//       return "중복임";
//     }
//     return null;
//   }, [text, todos]);
//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();

//       if (message) {
//         return alert("message");
//       }
//       console.log(text);
//     },
//     [ref, message, text]
//   );
//   useEffect(() => {
//     console.log(text);
//   }, [text]);
//   return (
//     <div>
//       <form action="" onSubmit={onSubmit}>
//         <input type="text" ref={ref} value={text} onChange={setText} />
//         <button>추가</button>
//       </form>
//       <ul>
//         {todos.map((todo, index) => {
//           return <li key={index}>{todo}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

export default Todo;
