import Auth from "../../../Page/Auth/Auth";
import "./AuthDefault.css";
import { Col, Container, Row } from "react-bootstrap";
const AuthLayOut = ({ children }, Proms) => {
  return (
    <>
      <Container className="authWraper">
        <Row className="authBox">
          <Col className="authRight">
            <h3>HOTFB</h3>
            <p>
              HOTFB giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống
              của bạn.
            </p>
          </Col>
          <Col className="authLeft">
            <Auth />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AuthLayOut;
