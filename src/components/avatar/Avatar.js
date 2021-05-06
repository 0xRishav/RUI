import "./Avatar.css";

const Avatar = ({ src, size }) => {
  return (
    <div className="avatar">
      <img
        style={{ height: size, width: size }}
        className="avatar__img"
        src={src}
        alt="avatarpic"
      />
    </div>
  );
};

export default Avatar;
