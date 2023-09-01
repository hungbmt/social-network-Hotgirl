import addAvatar from "../../../icon/addAvatar.png";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";
import { useState } from "react";
import { apiRegister } from "../../../Redux/apiRequest";
const Register = (Proms) => {
  const { onhide } = Proms;
  const masseges = useSelector((state) => state?.auth?.auth?.item);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvartar] = useState("");
  const HandleSubmitRegister = (e) => {
    e.preventDefault();
    const newItem = {
      username: username,
      email: email,
      avatar: avatar,
      password: password,
    };
    apiRegister(dispatch, newItem);
  };

  return (
    <>
      <h3>{masseges?.messages}</h3>
      <h3>{masseges?.verify}</h3>
      <div style={{ display: `${onhide}` }} className="registeWrapper">
        <div className="authFornWraper">
          <form onSubmit={HandleSubmitRegister} className="authInput">
            <input
              type="texy"
              placeholder="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Của Bạn"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Nhập Mật Khẩu"
              name="password"
              autoComplete="on"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              name="avatar"
              onChange={(e) => setAvartar(e.target.files[0])}
            />
            <label htmlFor="file">
              <img className="registerAddAvatar" src={addAvatar} alt="" />
              <span className="RAddAvatar">Add Avatar</span>
            </label>
            <button className="bnt-auth" type="submit">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
