import "./SibarLeft.css";

import user from "./../../../../icon/user.png";
import severd from "./../../../../icon/severd.png";
import video from "./../../../../icon/video.png";
import chatroom from "./../../../../icon/chatroom.png";

const SibarLeft = () => {
  return (
    <>
      <div className="sibarWraper">
        <ul>
          <li>
            <img
              className="avatarSBL"
              src="https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <span>Nguyễn Đình Hưng</span>
          </li>
          <li>
            <img className="iconSBL" src={user} alt="" />
            <span>Bạn Bè</span>
          </li>
          <li>
            <img className="iconSBL" src={severd} alt="" />
            <span>Đã Lưu</span>
          </li>
          <li>
            <img className="iconSBL" src={video} alt="" />
            <span>video</span>
          </li>
          <li>
            <img className="iconSBL" src={chatroom} alt="" />
            <span>chat room</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SibarLeft;
