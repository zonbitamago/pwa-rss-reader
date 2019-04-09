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

const RegistedListModal = props => {
  const urlList = null;
  const yesButtonClick = null;
  const open = false;
  const snackbarClose = null;
  const message = "";
  const className = "";

  return (
    <div className="RegistedListModal">
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">RegistedList</DialogTitle>
        <DialogContent>
          {urlList}
          <Input
            name="Name"
            // value={this.props.store.FeedListStore.name}
            // changeParentVal={val => {
            //   this.props.store.FeedListStore.name = val;
            // }}
          />
          <Input
            name="URL"
            // value={this.props.store.FeedListStore.url}
            // changeParentVal={val => {
            //   this.props.store.FeedListStore.url = val;
            // }}
          />
        </DialogContent>
        <DialogActions>
          <Button type="yes" handleClick={yesButtonClick} />
          <Button type="no" handleClick={props.handleClose} />
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={snackbarClose}
        ContentProps={{ "aria-describedby": "message-id" }}
        autoHideDuration={6000}
        message={
          <span id="message-id">
            <InfoIcon />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={snackbarClose}
          >
            <CloseIcon className="close" />
          </IconButton>
        ]}
        className={className}
      />
    </div>
  );
};

export default RegistedListModal;
