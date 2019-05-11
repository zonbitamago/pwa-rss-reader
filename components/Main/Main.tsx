import "./Main.css";
import Item from "../Item/Item";
import { StoreContainerInterface } from "../../store/StoreContainer";
import { Component } from "react";
import { observer } from "mobx-react";
import { Snackbar, Fade } from "@material-ui/core";

export interface MainInterface {
  store: StoreContainerInterface;
}

@observer
class Main extends Component<MainInterface> {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    const items = store.ItemStore.items.map((node, idx) => {
      return <Item key={idx} itemElement={node} />;
    });
    return (
      <div className="Main">
        {items}
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={this.props.store.ItemStore.hasUpdate}
          // open={true}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={<span id="message-id">新しい更新を確認する</span>}
          onClick={() => this.props.store.ItemStore.updateItems()}
          TransitionComponent={Fade}
          className="update"
        />
      </div>
    );
  }
}

export default Main;
