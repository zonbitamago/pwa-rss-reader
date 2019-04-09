import React, { useState } from "react";
import "./Menus.css";
import Refresh from "@material-ui/icons/Refresh";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import { GoMarkGithub } from "react-icons/go";
import Icon from "../Icon/Icon";
import RegistedListModal from "../RegistedListModal/RegistedListModal";
const Menus = () => {
  const [registedListModalOpen, setRegistedListModalOpen] = useState(false);
  return (
    <div className="Menus">
      <Icon>
        <Refresh />
      </Icon>
      <Icon>
        <RssFeed
          onClick={() => {
            setRegistedListModalOpen(true);
          }}
        />
        <RegistedListModal
          open={registedListModalOpen}
          handleClose={() => {
            setRegistedListModalOpen(false);
          }}
          // store={this.props.store}
          // electronUtil={this.props.electronUtil}
        />
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
