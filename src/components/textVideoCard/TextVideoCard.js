import "./TextVideoCard.css";

const TextVideoCard = () => {
  return (
    <div className="textVideoCard">
      <img
        src="https://img.youtube.com/vi/Bha8qs4wB_8/0.jpg"
        alt="thumbnail"
        className="textVideoCard__coverPhoto"
      />
      <div className="textVideoCard__infoWrapper">
        <div className="textVideoCard__organiser">Microsoft</div>
        <div className="textVideoCard__title">Microsoft Igni...</div>
        <div className="textVideoCard__description">
          Join us for our digital event experience on March 2-4, 2021. Microsoft
          Ignite i...
        </div>
      </div>
    </div>
  );
};

export default TextVideoCard;
