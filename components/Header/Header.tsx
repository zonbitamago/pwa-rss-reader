import "./Header.css";
import Icon from "../Icon/Icon";
import Home from "@material-ui/icons/Home";
import RssFeed from "@material-ui/icons/RssFeed";
import Typography from "@material-ui/core/Typography";
import { TiSocialTwitter } from "react-icons/ti";
import dayjs from "dayjs";

const Header = () => {
  const updateDate: string = dayjs().format("HH:mm:ss");
  return (
    <div className="Header">
      <div className="Header_Left">
        <Icon>
          <Home />
        </Icon>
      </div>
      <div className="Header_Center">
        <Icon>
          <RssFeed />
        </Icon>
        <Typography color="inherit" variant="subheading">
          +
        </Typography>
        <Icon>
          <TiSocialTwitter />
        </Icon>
      </div>
      <div className="Header_Right">
        <div>update : {updateDate}</div>
      </div>
    </div>
  );
};

export default Header;
