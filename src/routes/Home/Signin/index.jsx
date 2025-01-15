import { useEffect, useState } from "react";

const index = () => {
  const [number, setNumber] = useState(0);
  const onMinus = () => {
    setNumber((prev) => {
      return prev - 1;
    });
  };
  const onReset = () => {
    setNumber(0);
  };
  const onPlus = () => {
    setNumber(0);
    return prev + 1;
  };
  const [boolean, setBoolean] = useState(false);
  const [boolean2, setBoolean2] = useState(false);
  const [boolean3, setBoolean3] = useState(false);

  const onSwitch1 = () => {
    setBoolean((prev) => {
      // boolean 타입은 모/도 참/거짓
      // !boolean => boolean의 반대값
      return !prev;
    });
  };
  const onSwitch2 = () => {
    setBoolean((prev) => {
      // boolean 타입은 모/도 참/거짓
      // !boolean => boolean의 반대값
      return !prev;
    });
  };
  const onSwitch3 = () => {
    setBoolean((prev) => {
      // boolean 타입은 모/도 참/거짓
      // !boolean => boolean의 반대값
      return !prev;
    });
  };
  const onMasterSwitch = () => {
    setBoolean(false);
    setBoolean2(false);
    setBoolean3(false);
  };
  const [obj, setObj] = useState({ last: "강", first: "찬희" });
  const [first, setFirst] = useState();
  const [last, setLast] = useState();

  const onSubmitObj = () => {
    const newFirstaName = "빈";
    const newLastName = " 원";
  };

  const newName = {
    last: newFirstaName,
    first: newLastName,
  };

  const [array, setArray] = useState(["a", "b", "c", "b"]);

  const onAddArray = () => {
    // 만약에 string 이라는 변수가 길이가 0일때가 아무것도 입력하지 않은 때인데 이떄는 안댐
    setArray([]);
    if (string.length === 0) {
      alert("l");
    }
    setArray((prev) => {
      let copy = [...prev, string];
      console.log(copy);
      return [...prev.string];
    });
    const found = array.find((item) => item === string);
    if (found) {
      return alert("중복된 값");
    }
  };
  const [objArray, setObjArray] = useState([
    { l: "김", f: "영화" },
    { l: "이", f: "형진" },
    { l: "강", f: "찬희" },
  ]); // () 안에 초기값입력해야함
  const onObjArray = () => {
    const kyh = objArray[0];
    const lhj = objArray[1];

    const found = objArray.find((person) => {
      const newPerson = { l: last, f: first };
      const isSame = isSamePerson(newPerson, person);
      if (isSame) {
        return person;
      }
    });

    console.log(isSamePerson(kyh, lhj));
    const found = objArray.find((person) => person === { l: last, f: first });
    if (found) {
      return alert("same");
    }
    alert(" new");
    setObjArray([
      (p) => {
        return p;
      },
    ]); // () 안에 초기값과 똑같은 타입을 넣어줘야함
  };

  useEffect(() => {
    console.log({
      objArray,
      array,
    });
  }, [objArray, array]);
  return (
    <div>
      <h1>Signin</h1>
      <input
        type="text"
        value={string}
        onChange={(e) => (setString = e.target.value)}
      />
      <button onClick={onChangeString}>Change String</button>
      <div>
        <button onClick={onMinus}>-</button>
        <button onClick={onReset}>{number}</button>
        <button onClick={onPlus}>+</button>
      </div>
      <div>
        <p>Switch is (boolean ? "On" : "OFF")</p>
        <button onClick={onSwitch1}>Switch</button>
      </div>
      <div>
        <p>Switch is (boolean ? "On" : "OFF")</p>
        <button onClick={onSwitch2}>Switch</button>
      </div>
      <div>
        <p>Switch is (boolean ? "On" : "OFF")</p>
        <button onClick={onSwitch3}>Switch</button>
      </div>
      <button onClick={onMasterSwitch}>Master Switch</button>
      <div>
        <p>
          {obj.last}
          {obj.first}
        </p>
        <input
          value={last}
          onChange={(e) => {
            setLast(e.target.value);
          }}
          type="text"
          className="bg-gray-100 outling-none border-none border rounded hover:bg-gray-900 hover:text-white"
          placeholder="새로운 성을 입력"
          onChange={(e) => (setString = e.target.value)}
        />
        <input
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          type="text"
          className="bg-gray-100 outling-none border-none border rounded hover:bg-gray-900 hover:text-white"
          placeholder="새로운 성을 입력"
          onChange={(e) => (setString = e.target.value)}
        />
        <button onClick={onSubmitObj}>접수</button>
      </div>

      <div>
        <input type="text" name="" id="" />
        <button onClick={on}></button>
      </div>
      <div>
        <button onClick={onObjArray}>Check Obj Array</button>
      </div>
    </div>
  );
};

export default index;

const isSamePerson = (p1, p2) => {
  const name1 = `${p1.l}${p1.f}`;
  const name2 = `${p2.l}${p2.f}`;
  if (name1 === name2) {
    return true;
  }
  return false;
};

// 문자열과 문자열 비교 간단합니다 === // !== 같은지 다른지

// 숫자 비교는 ===, !==, <, >, <=, >=

// null, undefinded 는 비교할것도없고

// 객체와 객체. 객체의 모든 값을 하나하나 일일이 비교해줘야한다.

const a = {
  name: "gogo",
  age: 20,
  mobile: "010",
};
const b = {
  name: "roro",
  age: 22,
  mobile: "010",
};
