import { useState } from "react";
import "./NormalVideoCard.css";
import { AiFillPlayCircle } from "react-icons/ai";

const NormalVideoCard = ({ isInGrid }) => {
  const [isCardHover, setIsCardHover] = useState(false);
  return (
    <div
      className={isInGrid ? "normalVideoCard inGrid" : "normalVideoCard"}
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      <img
        src={`https://img.youtube.com/vi/-rAeqN-Q7x4/0.jpg`}
        alt="video-cover"
        className="normalVideoCard__cover"
        style={{ opacity: isCardHover ? "0.5" : "1" }}
      />
      <div
        className="normalVideoCard__organiser"
        style={{ opacity: isCardHover ? "1" : "0" }}
      >
        Apple
      </div>
      <AiFillPlayCircle
        className="normalVideoCard__playBtn"
        size="50"
        style={{ opacity: isCardHover ? "1" : "0" }}
      />
      <div
        className="normalVideoCard__title"
        style={{ opacity: isCardHover ? "1" : "0" }}
      >
        September Event 2019 — Apple
      </div>
    </div>
  );
};

export default NormalVideoCard;
