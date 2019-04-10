import "./SettingModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";

const SettingModal = props => {
  const yesButtonClick = () => {
    props.handleClose();
  };
  return (
    <div className="SettingModal">
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <Input
            name="UpdateDuration"
            // value={this.props.store.ItemStore.updateDuration}
            // changeParentVal={val => {
            //   this.props.store.ItemStore.updateDuration = val;
            // }}
          />
        </DialogContent>
        <DialogActions>
          <Button type="yes" handleClick={yesButtonClick} />
          <Button type="no" handleClick={props.handleClose} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SettingModal;
