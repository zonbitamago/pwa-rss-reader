import { observable } from "mobx";

class FeedListStore {
  @observable public feedList: string[] = [];
  @observable public name: string = "";
  @observable public url: string = "";
}

export default FeedListStore;
