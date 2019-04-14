import { action, observable } from "mobx";

class ItemStore {
  @observable updateDuration = 5;
  @observable items = [];

  @action.bound
  setUpdateDuration(updateDuration) {
    this.updateDuration = updateDuration;
  }

  @action.bound
  fetchItems() {
    const item = {
      alt: "alt",
      src: "https://www.google.com/s2/favicons?domain=qiita.com",
      domainName: "Qiita",
      date: "2019/04/13",
      url: "https://qiita.com/zonbitamago/items/4e215e305062dde016bb",
      itemName: "無料で爆速なWebアプリケーションを作ろう！"
    };
    this.items.push(item);
  }
}

export default ItemStore;
