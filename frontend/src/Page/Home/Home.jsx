import "./Home.css";
import { Container } from "react-bootstrap";
import ContenTop from "../../Component/Home/Contentop/ContenTop";
import CTStatus from "../../Component/Home/CTStatus/CTStatus";
import Interact from "../../Component/Home/Interact/Interact";
import InputComment from "../../Component/Home/InPutComment/InPutComment";
import ListComment from "../../Component/Home/ListComment/ListComment";

// import AddImg from "../../icon/addimg.png";

const Home = () => {
  return (
    <>
      <Container>
        <div className="contentWraper">
          <div className="ctPostWraper">
            <div className="CTPText">
              <div className="avatarCt">
                <img
                  src="https://images.pexels.com/photos/17244596/pexels-photo-17244596/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <input
                value={""}
                type="text"
                placeholder="Hưng ơi bạn có suy nghỉ gì thế"
              />
            </div>
            <div className="CTPUpload">
              <span>Image/Video</span>
              <span>Tag</span>
              <span>Location</span>
              <span>feelings</span>
            </div>
          </div>
          <div className="contentBoxCH">
            <ContenTop />
            <CTStatus />
            <Interact />
            <InputComment />
            <ListComment />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
