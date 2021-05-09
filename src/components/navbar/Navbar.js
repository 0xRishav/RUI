import "./Navbar.css";

const Navbar = ({ isHomePage, setIsHomePage }) => {
  console.log(isHomePage);
  console.log(setIsHomePage);
  return (
    <div className="navbar__wrapper">
      <div className="navbar">
        <div className="logo">RUI</div>
        <div className="navbar__linksWrapper">
          <div
            className="navbar__link"
            onClick={() => {
              setIsHomePage(true);
            }}
          >
            Docs
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              setIsHomePage(false);
            }}
          >
            Usage
          </div>
          <caption>v1.0</caption>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
