import { Badge } from "../../components";

const Badges = () => {
  return (
    <div>
      <h1 className="component-title">Badges</h1>
      <div className="component-row">
        <Badge badgeValue="" color="green" />
        <Badge badgeValue="" color="red" />
      </div>
    </div>
  );
};

export default Badges;
