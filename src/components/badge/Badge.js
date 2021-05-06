import "./Badge.css";

function Badge({ badgeValue, color }) {
  return (
    <div className="Badge">
      <span className={`Badge__span Badge__span--${color}`}>
        {badgeValue ? badgeValue : ""}
      </span>
      <img
        className="Badge__image"
        src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        alt="profile-picture-avatar"
      />
    </div>
  );
}

export default Badge;
