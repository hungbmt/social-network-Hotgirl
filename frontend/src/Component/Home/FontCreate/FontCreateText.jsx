import { Dropdown } from "react-bootstrap";
import "./FontCreateTex.css";
import addImg from "../../../icon/addimg.png";
import { memo, useState } from "react";
import { apiCreate } from "../../../Redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
const FontCreateText = (Proms) => {
  const { onform, setHide } = Proms;
  const [description, setDescription] = useState("");
  const [file, SetFile] = useState(null);
  const [filess, SetFiless] = useState();
  const dispatch = useDispatch();
  const RefeshToken = useSelector(
    (state) => state.getAll?.getAll?.item?.RefeshToken
  );

  // handle close form post --> sử lý tắt mở form tạo bài viết
  const HandleClose = () => {
    if (onform === true) {
      setHide("hide");
    }
  };

  // handle Show image  --> sử lý hiện hình ảnh
  const handleUpfile = (e) => {
    const files = e.target.files;
    const arrayFiles = Array.from(files);
    const arrGidd = arrayFiles.map((item) => {
      return URL.createObjectURL(item);
    });
    SetFiless(arrGidd);
    SetFile(files);
  };
  console.log(filess);

  // handle submit form create --> xử lý đăng bài viết lên sever
  const HandleSubmitCreate = (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("description", description);
    for (let i = 0; i < file?.length; i++) {
      formdata.append("postImage", file[i]);
    }
    apiCreate(dispatch, formdata, RefeshToken);
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
                onChange={handleUpfile}
              />
              <label htmlFor="file">
                <img src={addImg} alt="" />
                <span className="addimg">add img</span>
              </label>
            </div>
          </div>
          {filess &&
            filess.map(() => {
              return (
                <div className="layoutImg">
                  <h2>jdjjdjd</h2>;
                </div>
              );
            })}
          <button className="btn-font">Send</button>
        </form>
      </div>
    </>
  );
};

export default memo(FontCreateText);
