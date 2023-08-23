import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { Col, Row } from "react-bootstrap";

const Auth = () => {
  const [onRegister, setOnregister] = useState(false);
  const [onflex, setflex] = useState("flex");
  const [onhide, setHide] = useState("none");
  const HandleClickRegister = () => {
    if (onRegister === false) {
      setOnregister(true);
      setflex("none");
      setHide("flex");
    }
  };

  const HanleClickLogin = () => {
    if (onRegister === true) {
      setOnregister(false);
      setflex("flex");
      setHide("none");
    }
  };

  return (
    <>
      <Login onflex={onflex} />
      <Register onhide={onhide} />
      <div className="LinkFormsWraper">
        <Row>
          <Col>
            <div className="LinkForms" onClick={HandleClickRegister}>
              Đăng Ký
            </div>
          </Col>
          <Col>
            <div className="LinkForms" onClick={HanleClickLogin}>
              Đăng nhập
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Auth;
