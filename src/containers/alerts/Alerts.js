import Alert from "../../components/alert/Alert";
import "./Alerts.css";

const Alerts = () => {
  return (
    <div>
      <h1 className="component-title">Alerts</h1>
      <Alert type="Success" message="Success Alert" />
      <Alert type="Info" message="Info Alert" />
      <Alert type="Warning" message="Warning Alert" />
      <Alert type="Danger" message="Danger Alert" />
    </div>
  );
};

export default Alerts;
