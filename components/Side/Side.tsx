import "./Side.css";
import Time from "../Time/Time";
import Menus from "../Menus/Menus";
import { StoreContainerInterface } from "../../store/StoreContainer";

export interface SideInterface {
  store: StoreContainerInterface;
}

const Side = (props: SideInterface) => {
  return (
    <div className="Side">
      <div className="Side_Top">
        <Menus store={props.store} />
      </div>
      <div className="Side-Bottom">
        <Time />
      </div>
    </div>
  );
};

export default Side;
