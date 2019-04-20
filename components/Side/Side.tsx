import "./Side.css";
import Time from "../Time/Time";
import Menus from "../Menus/Menus";
const Side = () => {
  return (
    <div className="Side">
      <div className="Side_Top">
        <Menus />
      </div>
      <div className="Side-Bottom">
        <Time />
      </div>
    </div>
  );
};

export default Side;
