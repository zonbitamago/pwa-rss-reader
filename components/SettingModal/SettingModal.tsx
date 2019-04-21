import "./SettingModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { observer } from "mobx-react";
import React, { Component } from "react";
import ItemStore from "../../store/ItemStore";

const store = new ItemStore();

export interface SettingModalInterface {
  handleClose: any;
  open: boolean;
}

@observer
class SettingModal extends Component<SettingModalInterface> {
  constructor(props) {
    super(props);
    this.yesButtonClick = this.yesButtonClick.bind(this);
  }
  yesButtonClick() {
    this.props.handleClose();
  }
  render() {
    const { open, handleClose } = this.props;
    return (
      <div className="SettingModal">
        <Dialog
          open={open}
          onClose={handleClose}
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
              value={store.updateDuration}
              changeParentVal={val => {
                store.setUpdateDuration(val);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button type="yes" handleClick={this.yesButtonClick} />
            <Button type="no" handleClick={handleClose} />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default SettingModal;
