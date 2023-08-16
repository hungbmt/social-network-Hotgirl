const InputComment = () => {
  return (
    <div className="iputComment">
      <div className="logoIpC">
        <img
          src="https://images.pexels.com/photos/16013432/pexels-photo-16013432/free-photo-of-th-i-trang-dan-ba-c-chan-dung.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <input type="text" placeholder="Comment" />
      <button>send</button>
    </div>
  );
};

export default InputComment;
