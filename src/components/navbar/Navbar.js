import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="logo">RUI</div>
        <div className="navbar__linksWrapper">
          <a href="#" className="navbar__link">
            Docs
          </a>
          <a href="#" className="navbar__link">
            Usage
          </a>
          <caption>v1.0</caption>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
