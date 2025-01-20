//useState 불러오고
import { useCallback } from "react";
import { useMyContext } from "../../contextApi/ContextProvider";
import { users } from "../../assets/fakebase";

const Signin = () => {
  const { email } = useMyContext();

  const [value, setValue] = useState(email);
  const [pwd, setPwd] = useState("");
  const emailMessage = useMemo(() => {
    return null;
  }, [value]);
  const pwdMessage = useMemo(() => {
    return null;
  }, [pwd]);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log({ value, pwd });
    },
    [emailMessage, pwdMessage, value, pwd]
  );
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          id="email"
          placeholder={"이메일주소"}
          setValue={setValue}
          value={value}
        />
        <input
          type="password"
          id="pwd"
          placeholder={"비밀번호"}
          setValue={setPwd}
          value={pwd}
        />
        <button>로그인</button>
        <button type="button">비밀번호를 잊으셨나요?</button>
        <div>
          <input type="checkbox" name="" id="check1" />
          <label htmlFor="check1">로그인 정보 저장</label>
        </div>
        <button>
          Netflix 회원이 아닌가요?<span>지금 가입하세요.</span>
        </button>
      </form>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ea
        animi velit, maiores, ut minus reiciendis eligendi quntore laborum iste
        commodi?
      </p>
    </div>
  );
};

export default Signin;
