import "./Login.css";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { apiLogin } from "../../../Redux/apiRequest";

const Login = (Proms) => {
  const { onflex } = Proms;
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const HandleSubmitLogin = (e) => {
    e.preventDefault();
    const item = {
      username: username,
      password: password,
    };
    apiLogin(dispatch, item);
  };
  return (
    <>
      <div style={{ display: `${onflex}` }} className="loginWraper">
        <div className="authFornWraper">
          <form onSubmit={HandleSubmitLogin} className="authInput">
            <input
              type="text"
              placeholder="Email Của Bạn"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Nhập mật pasword"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="bnt-auth"> Đăng Nhập</button>
          </form>
          <Link to={"/"}>Quên mật khẩu?</Link>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
