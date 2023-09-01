import { Dropdown } from "react-bootstrap";
import "./FontCreateTex.css";
import addImg from "../../../icon/addimg.png";
import { useState } from "react";
import { apiCreate } from "../../../Redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";

const FontCreateText = (Proms) => {
  const { onform, setHide } = Proms;
  const [description, setDescription] = useState("");
  const [file, SetFile] = useState(null);
  const dispatch = useDispatch();
  const RefeshToken = useSelector(
    (state) => state.auth?.login?.item.RefeshToken
  );
  const HandleClose = () => {
    if (onform === true) {
      setHide("hide");
    }
  };

  const HandleSubmitCreate = (e) => {
    e.preventDefault();
    const newItem = {
      description: description,
      postImage: file,
    };
    apiCreate(dispatch, newItem, RefeshToken);
  };

  return (
    <>
      <div className="formPostText">
        <form onSubmit={HandleSubmitCreate} className="fontPosttextBox">
          <span className="FPTBTitile">create content</span>
          <div className="close" onClick={HandleClose}>
            x
          </div>
          <div className="FPTInfoBox">
            <img
              src="https://images.pexels.com/photos/17244596/pexels-photo-17244596/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="FBTIRight">
              <span className="GBTIRName">Nguyễn Đình Hưng</span>
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Ẩn/Hiện
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Công Khai</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Chỉ Mình Tôi
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="fontContentBox">
            <textarea
              name=""
              id=""
              placeholder="Hưng ơi bạn đang nghỉ gì"
              cols="100%"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <div className="inputAddImg">
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                name="postImage"
                multiple
                onChange={(e) => SetFile(e.target.files[0])}
              />
              <label htmlFor="file">
                <img src={addImg} alt="" />
                <span className="addimg">add img</span>
              </label>
            </div>
            <div className="layoutImg">
              <img
                src="https://images.pexels.com/photos/18054267/pexels-photo-18054267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/17685526/pexels-photo-17685526/free-photo-of-bi-n-thanh-ph-binh-minh-phong-c-nh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/18048288/pexels-photo-18048288/free-photo-of-anh-sang-thanh-ph-hoang-hon-d-ng-chan-tr-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/18048288/pexels-photo-18048288/free-photo-of-anh-sang-thanh-ph-hoang-hon-d-ng-chan-tr-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/18048288/pexels-photo-18048288/free-photo-of-anh-sang-thanh-ph-hoang-hon-d-ng-chan-tr-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <img
                src="https://images.pexels.com/photos/18048288/pexels-photo-18048288/free-photo-of-anh-sang-thanh-ph-hoang-hon-d-ng-chan-tr-i.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
          </div>
          <button className="btn-font">Send</button>
        </form>
      </div>
    </>
  );
};

export default FontCreateText;
