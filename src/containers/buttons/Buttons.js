import { Button } from "../../components";
import { AiFillHome } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiSend } from "react-icons/fi";

const Buttons = () => {
  return (
    <div>
      <h1 className="component-title">Buttons</h1>
      <h3>Normal Buttons</h3>
      <div className="component-row">
        <Button text="Primary Button" isPrimary />
        <Button text="Secondary Button" />
      </div>
      <h3>Icon Buttons</h3>
      <div className="component-row">
        <Button
          text="Primary Button"
          icon={<AiFillHome />}
          isPrimary
          isFloating
        />
        <Button
          icon={<AiFillDelete />}
          text="Secondary Button"
          isPrimary
          isFloating
        />
        <Button
          icon={<CgProfile />}
          text="Secondary Button"
          isPrimary
          isFloating
        />
        <Button icon={<FiSend />} text="Secondary Button" isFloating />
        <Button icon={<BsPencil />} text="Secondary Button" isFloating />
      </div>
    </div>
  );
};

export default Buttons;
