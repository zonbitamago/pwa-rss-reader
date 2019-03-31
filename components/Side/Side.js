import "./Side.css";
import Time from "../Time/Time";
const Side = () => {
  return (
    <div className="Side">
      <div className="Side_Top">Top</div>
      <div className="Side-Bottom">
        <Time />
      </div>
    </div>
  );
};

export default Side;
