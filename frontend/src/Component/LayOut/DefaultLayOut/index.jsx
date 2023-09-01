/* eslint-disable no-useless-concat */
import { Col, Container, Row } from "react-bootstrap";
import Hearder from "./Hearder/Hearder";
import SibarLeft from "./SibarLeft/SibarLeft";
import { memo, useState } from "react";
import SibarRight from "./SibarRight/SibarRight";
import { useSelector } from "react-redux";
import Auth from "../AuthLayOut/index";

const DefaultLayOut = ({ children }) => {
  const [change, setChange] = useState(false);
  const [showHide, setShowHide] = useState("hide");
  const rsToken = useSelector((state) => state.auth?.login?.item?.RefeshToken);
  const HandleShowClick = () => {
    if (change === false) {
      setChange(true);
      setShowHide("show");
    } else if (change === true) {
      setChange(false);
      setShowHide("hide");
    }
  };

  return (
    <>
      {!rsToken ? (
        <Auth />
      ) : (
        <div className="wrapper">
          <Hearder handle={HandleShowClick} change={change} />
          <div className={`showNabarLeft  + ${showHide}`}></div>
          <Container fluid className="homeWraper">
            <Row>
              <Col xl={2} className={"sibarlef"}>
                <SibarLeft />
              </Col>
              <Col xl={7} lg={8} className="contentHome">
                <div>{children}</div>
              </Col>
              <Col xl={3} lg={4} className="sibarRight">
                <SibarRight />
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default memo(DefaultLayOut);
