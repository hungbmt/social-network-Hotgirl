import {
  CommentOutlined,
  LikeFilled,
  LikeOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const Interact = () => {
  return (
    <div className="interactWrapper">
      <div className="interactionTop">
        <div className="interactLeft">
          <LikeFilled className="iconLike" />
          <span>100k</span>
        </div>
        <div className="interactRight">
          <div className="interactComment">
            <span>1k4</span>
            <span>Comment</span>
          </div>
          <div className="interactShare">
            <span>5</span>
            <span>share</span>
          </div>
        </div>
      </div>
      <div className="interactBottom">
        <ul>
          <li>
            {" "}
            <LikeOutlined className="pd0" />
            Like
          </li>
          <li>
            {" "}
            <CommentOutlined className="pd0" />
            Comment
          </li>
          <li>
            {" "}
            <ShareAltOutlined className="pd0" /> Share{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Interact;
