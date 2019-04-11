import { action, observable } from "mobx";

class ItemStore {
  @observable updateDuration = 5;

  @action.bound
  setUpdateDuration(updateDuration) {
    this.updateDuration = updateDuration;
  }
}

export default ItemStore;
