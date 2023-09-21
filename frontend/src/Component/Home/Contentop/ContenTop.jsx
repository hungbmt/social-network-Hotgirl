const ContenTop = (Proms) => {
  const { avatar, poster } = Proms;
  return (
    <div className="contenTop">
      <div className="avatarHCT">
        <img src={`${"http://localhost:6969/avatar/" + avatar}`} alt="" />
      </div>
      <div className="nameHCT">
        <span>{poster}</span>
        <span>23phút</span>
      </div>
    </div>
  );
};

export default ContenTop;
