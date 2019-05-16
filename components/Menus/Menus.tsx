import React, { Component } from "react";
import "./Menus.css";
import Refresh from "@material-ui/icons/Refresh";
import RssFeed from "@material-ui/icons/RssFeed";
import Settings from "@material-ui/icons/Settings";
import { GoMarkGithub } from "react-icons/go";
import Icon from "../Icon/Icon";
import RegistedListModal from "../RegistedListModal/RegistedListModal";
import SettingModal from "../SettingModal/SettingModal";
import { StoreContainerInterface } from "../../store/StoreContainer";
import { observer } from "mobx-react";

export interface MenusInterface {
  store: StoreContainerInterface;
}

interface MenusStateInterface {
  registedListModalOpen: boolean;
  settingModalOpen: boolean;
}

@observer
class Menus extends Component<MenusInterface, MenusStateInterface> {
  public state: MenusStateInterface = {
    registedListModalOpen: false,
    settingModalOpen: false
  };

  constructor(props) {
    super(props);

    this.setRegistedListModalOpen = this.setRegistedListModalOpen.bind(this);
    this.setSettingModalOpen = this.setSettingModalOpen.bind(this);
  }

  setRegistedListModalOpen(isOpen) {
    this.setState({ registedListModalOpen: isOpen });
  }

  setSettingModalOpen(isOpen) {
    this.setState({ settingModalOpen: isOpen });
  }

  render() {
    const { registedListModalOpen, settingModalOpen } = this.state;
    const { store } = this.props;
    let loadingClassName = store.ItemStore.isLoading ? "loading" : "";
    return (
      <div className="Menus">
        <Icon>
          <Refresh
            className={loadingClassName}
            onClick={() => {
              store.ItemStore.fetchItems();
            }}
          />
        </Icon>
        <Icon>
          <RssFeed
            onClick={() => {
              store.FeedListStore.getFeedList();
              this.setRegistedListModalOpen(true);
            }}
          />
          <RegistedListModal
            open={registedListModalOpen}
            handleClose={() => {
              this.setRegistedListModalOpen(false);
            }}
            store={store}
          />
        </Icon>
        <Icon>
          <Settings
            onClick={() => {
              // this.props.store.ItemStore.getSettings();
              this.setSettingModalOpen(true);
            }}
          />
          <SettingModal
            open={settingModalOpen}
            handleClose={() => {
              this.setSettingModalOpen(false);
            }}
            store={store}
          />
        </Icon>
        <Icon>
          <GoMarkGithub
            onClick={() =>
              window.open(
                "https://github.com/zonbitamago/pwa-rss-reader",
                "_blank"
              )
            }
          />
        </Icon>
      </div>
    );
  }
}

export default Menus;
