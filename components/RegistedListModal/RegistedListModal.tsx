import "./RegistedListModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Snackbar from "@material-ui/core/Snackbar";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { StoreContainerInterface } from "../../store/StoreContainer";
import { Component } from "react";
import { observer } from "mobx-react";
import RegistedListItem from "../RegistedListItem/RegistedListItem";
import DuplicationFeedURLError from "../../error/DuplicationFeedURLError";
import InvalidFeedURLException from "../../error/InvalidFeedURLException";

export interface RegistedListModalInterface {
  open: boolean;
  handleClose: any;
  store: StoreContainerInterface;
}

interface RegistedListModalState {
  open: boolean;
  message: string;
  class: string;
}

@observer
class RegistedListModal extends Component<
  RegistedListModalInterface,
  RegistedListModalState
> {
  public state: RegistedListModalState = {
    open: false,
    message: "",
    class: ""
  };

  constructor(props) {
    super(props);

    this.yesButtonClick = this.yesButtonClick.bind(this);
    this.snackbarClose = this.snackbarClose.bind(this);
  }

  async yesButtonClick() {
    try {
      await this.props.store.FeedListStore.setFeedList();
    } catch (error) {
      if (error instanceof DuplicationFeedURLError) {
        this.setState({
          open: true,
          message: "すでに登録済みのURLです。",
          class: "error"
        });

        return;
      }

      if (error instanceof InvalidFeedURLException) {
        this.setState({
          open: true,
          message: "このURLは登録できません。",
          class: "error"
        });

        return;
      }
    }

    this.setState({
      open: true,
      message: "登録が完了しました。",
      class: "success"
    });
    await this.props.store.ItemStore.setTimer();
  }

  snackbarClose() {
    this.setState({ open: false });
  }

  render() {
    const { FeedListStore } = this.props.store;

    const urlList = FeedListStore.feedList.map((elem, idx) => {
      return (
        <RegistedListItem
          key={idx}
          name={elem.name}
          url={elem.url}
          store={this.props.store}
        />
      );
    });

    return (
      <div className="RegistedListModal">
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">RegistedList</DialogTitle>
          <DialogContent>
            {urlList}
            <Input
              name="Name"
              value={FeedListStore.name}
              changeParentVal={val => {
                FeedListStore.name = val;
              }}
            />
            <Input
              name="URL"
              value={FeedListStore.url}
              changeParentVal={val => {
                FeedListStore.url = val;
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button type="yes" handleClick={this.yesButtonClick} />
            <Button type="no" handleClick={this.props.handleClose} />
          </DialogActions>
        </Dialog>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={this.state.open}
          onClose={this.snackbarClose}
          ContentProps={{ "aria-describedby": "message-id" }}
          autoHideDuration={6000}
          message={
            <span id="message-id">
              <InfoIcon />
              {this.state.message}
            </span>
          }
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              <CloseIcon className="close" />
            </IconButton>
          ]}
          className={this.state.class}
        />
      </div>
    );
  }
}

export default RegistedListModal;
