import "./Hearder.css";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { UnorderedListOutlined } from "@ant-design/icons";
import { apiLogout } from "../../../../Redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Hearder = (Proms) => {
  const { handle, change } = Proms;
  const distpatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = useSelector(
    (state) => state.auth?.login?.item?.RefeshToken
  );
  const HandleLogout = () => {
    apiLogout(distpatch, refreshToken, navigate);
  };
  return (
    <div className="HearderWrapper">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="addds" fluid>
          <div className="HDLleft">
            <Navbar.Brand className="logo" href="/">
              HotGirl
            </Navbar.Brand>
            <div className="showSBL" onClick={() => handle(change)}>
              <UnorderedListOutlined className="iconSSBL" />
            </div>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex searchNav">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className="authWrapper">
              <button className="btn-aut" onClick={HandleLogout}>
                logOut
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Hearder;
