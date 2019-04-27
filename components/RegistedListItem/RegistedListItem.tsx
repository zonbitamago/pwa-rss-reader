import "./RegistedListItem.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";
import { StoreContainerInterface } from "../../store/StoreContainer";

export interface RegistedListItemInterface {
  name: string;
  url: string;
  store: StoreContainerInterface;
}

const RegistedListItem = (props: RegistedListItemInterface) => {
  const { name, url, store } = props;

  const deleteClick = () => {
    store.FeedListStore.deleteFeedList(name);
    store.ItemStore.setTimer();
  };
  return (
    <div className="RegistedListItem">
      <ListItem component="a">
        <ListItemText
          className="RegistedListItem-Text"
          primary={name}
          //   onClick={this.props.electronUtil.openBrowser.bind(
          //     this,
          //     this.props.url
          //   )}
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={deleteClick}>
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </div>
  );
};

export default RegistedListItem;
