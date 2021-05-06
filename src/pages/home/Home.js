import { useState } from "react";
import { List } from "../../components";
import {
  Alerts,
  Avatar,
  Badges,
  Buttons,
  Cards,
  Images,
  Inputs,
  Lists,
} from "../../containers";
import Avatars from "../../containers/avatar/Avatars";
import "./Home.css";

const Home = () => {
  const [active, setActive] = useState(0);
  const options = [
    { title: "Avatars", component: <Avatars /> },
    { title: "Alerts", component: <Alerts /> },
    { title: "Badges", component: <Badges /> },
    { title: "Buttons", component: <Buttons /> },
    { title: "Cards", component: <Cards /> },
    { title: "Images", component: <Images /> },
    { title: "Inputs", component: <Inputs /> },
    { title: "Lists", component: <Lists /> },
  ];
  return (
    <div className="home">
      <div className="home__sideNav">
        <h4 style={{ marginTop: "0" }}>RUI Components</h4>
        {options.map((option, index) => (
          <div className="home__sideNavLink" onClick={() => setActive(index)}>
            {option.title}
          </div>
        ))}
      </div>
      <div className="home__componentWrapper">{options[active].component}</div>
    </div>
  );
};

export default Home;
