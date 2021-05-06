import "./Avatars.css";
import { Avatar } from "../../components";

const Avatars = ({ src }) => {
  return (
    <div className="avatars">
      <h1 className="component-title">Avatars</h1>
      <h3>Image Avatars</h3>
      <div className="component-row">
        <Avatar
          size="25px"
          src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        />
        <Avatar
          size="50px"
          src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        />
        <Avatar
          size="75px"
          src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        />
        <Avatar
          size="100px"
          src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        />
        <Avatar
          size="125px"
          src="https://www.popsci.com/app/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg"
        />
      </div>

      <h3>Gif Avatars</h3>

      <div className="component-row">
        <Avatar
          size="25px"
          src="https://i.pinimg.com/originals/bf/57/02/bf57026ee75af2f414000cec322f7404.gif"
        />
        <Avatar
          size="50px"
          src="https://i.pinimg.com/originals/bf/57/02/bf57026ee75af2f414000cec322f7404.gif"
        />
        <Avatar
          size="75px"
          src="https://i.pinimg.com/originals/bf/57/02/bf57026ee75af2f414000cec322f7404.gif"
        />
        <Avatar
          size="100px"
          src="https://i.pinimg.com/originals/bf/57/02/bf57026ee75af2f414000cec322f7404.gif"
        />
        <Avatar
          size="125px"
          src="https://i.pinimg.com/originals/bf/57/02/bf57026ee75af2f414000cec322f7404.gif"
        />
      </div>
    </div>
  );
};

export default Avatars;
