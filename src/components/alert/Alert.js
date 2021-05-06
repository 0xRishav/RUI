import React, { useEffect, useState } from "react";
import "./Alert.css";

function Alert({ type, message }) {
  const [emoji, setEmoji] = useState(null);
  useEffect(() => {
    switch (type) {
      case "Success":
        setEmoji("✅");
        break;
      case "Danger":
        setEmoji("☠️");
        break;
      case "Warning":
        setEmoji("⚠");
        break;
      case "Info":
        setEmoji("ℹ️");
        break;
      default:
        setEmoji(null);
    }
  });
  return (
    <div className="Alert">
      <p className={type}>
        <span style={{ marginRight: "10px" }}>{emoji}</span>
        {message}
      </p>
    </div>
  );
}

export default Alert;
