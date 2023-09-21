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
import { useDispatch, useSelector } from "react-redux";
import CTPText from "../../Component/Home/CTPText/CTPText";
const Home = () => {
  const items = useSelector((state) => state.getAll?.getAll?.item?.data);
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
          {items?.map((item) => {
            return (
              <>
                <div className="ctPostWraper" onClick={HandleOnForm}>
                  <CTPText />
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
                  <ContenTop avatar={item.avatar} poster={item.poster} />
                  <CTStatus
                    description={item.description}
                    files={item.files}
                    id={item._id}
                  />
                  <Interact />
                  <InputComment />
                  <ListComment />
                </div>
              </>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Home;
