import { SearchOutlined } from "@ant-design/icons";
import banner from "./../../../../img/th.jpg";
import "./SibarRight.css";
const SibarRight = () => {
  return (
    <div className="SibarRightBox">
      <div className="Advertisings">
        <span className="titleSBR">quảng cáo</span>
        <img src={banner} alt="" />
      </div>
      <div className="friendRequestWraper">
        <span className="titleSBR">Friend request</span>
        <div className="frendRequestBox">
          <div className="avatarHCT">
            <img
              src="https://images.pexels.com/photos/17244596/pexels-photo-17244596/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="friendAutbox">
            <span>hiếu nguyễn</span>
            <div className="FrAuthentication">
              <button>confirm</button>
              <button>erase</button>
            </div>
          </div>
        </div>
      </div>
      <div className="contactWrapper">
        <div className="contactTop">
          <span className="titleSBR">online friends</span>
          <SearchOutlined />
        </div>
        <div className="frendBottonBox">
          <div className="avatarContac">
            <img
              src="https://images.pexels.com/photos/17244596/pexels-photo-17244596/free-photo-of-wood-city-landscape-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <span>Nguyễn Đình Hưng</span>
        </div>
      </div>
    </div>
  );
};

export default SibarRight;
