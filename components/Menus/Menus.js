import "./Menus.css";
import Refresh from "@material-ui/icons/Refresh";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import { GoMarkGithub } from "react-icons/go";
import Icon from "../Icon/Icon";
const Menus = () => {
  return (
    <div className="Menus">
      <Icon>
        <Refresh />
      </Icon>
      <Icon>
        <RssFeed />
      </Icon>
      <Icon>
        <IndeterminateCheckBox />
      </Icon>
      <Icon>
        <Settings />
      </Icon>
      <Icon>
        <GoMarkGithub />
      </Icon>
    </div>
  );
};

export default Menus;
