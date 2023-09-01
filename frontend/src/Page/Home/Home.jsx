import "./Home.css";
import { Container } from "react-bootstrap";
import ContenTop from "../../Component/Home/Contentop/ContenTop";
import CTStatus from "../../Component/Home/CTStatus/CTStatus";
import Interact from "../../Component/Home/Interact/Interact";
import InputComment from "../../Component/Home/InPutComment/InPutComment";
import ListComment from "../../Component/Home/ListComment/ListComment";
import FontCreateText from "../../Component/Home/FontCreate/FontCreateText";
import { useEffect, useState } from "react";
import { getAllItem } from "../../Redux/apiRequest";
import { useDispatch } from "react-redux";
const Home = () => {
  const [onfrom, setOnform] = useState(false);
  const [hide, setHide] = useState("hide");
  const dispatch = useDispatch();
  const HandleOnForm = () => {
    if (onfrom === false) {
      setOnform(true);
      setHide("show");
    } else if (onfrom === true) {
      setOnform(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getAllItem(dispatch);
    }, 1000);
  }, [dispatch]);
  return (
    <>
      <Container>
        <div className="contentWraper">
          <div className="ctPostWraper" onClick={HandleOnForm}>
            <div className="CTPText">
              <div className="avatarCt">
                <img
                  src="https://images.pexels.com/photos/17244596/pexels-photo-17244596/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <input type="text" placeholder="Hưng ơi bạn có suy nghỉ gì thế" />
            </div>
            <div className={`formCreateWraper ${hide}`}>
              <FontCreateText
                onform={onfrom}
                setFrom={setOnform}
                setHide={setHide}
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
