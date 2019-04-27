import { action, observable } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import * as DayFormatter from "../utils/DayFormatter";
import * as LocalStorageManager from "../utils/LocalStorageManager";

export interface ItemElementInterface {
  alt: string;
  src: string;
  domainName: string;
  date: string;
  url: string;
  itemName: string;
}

class ItemStore {
  @observable public updateDuration: number = 5;
  @observable public items: ItemElementInterface[] = [];
  @observable public saveItems: ItemElementInterface[] = [];
  @observable public isLoading: boolean = false;
  @observable public updateTime: string = DayFormatter.HH24MMSS();
  public timerId: NodeJS.Timeout | undefined;

  @action.bound
  setUpdateDuration(updateDuration: number): void {
    this.updateDuration = updateDuration;
  }

  @action.bound
  async fetchItems(): Promise<void> {
    const feedList = LocalStorageManager.getFeedList();

    if (feedList.length == 0) {
      return;
    }

    this.isLoading = true;

    const urls = feedList.map(elem => {
      return elem.url;
    });
    const json = await FetchRssFeed(urls);
    json.results.forEach(node => {
      const src: string =
        "https://www.google.com/s2/favicons?domain=" +
        node.feed.link.split("//")[1];

      const domainName = feedList.filter(elem => {
        return elem.url == node.url;
      })[0].name;

      node.feed.items.forEach(element => {
        const itemName: string = element.title;
        const url: string = element.link;
        const date: string = DayFormatter.YYYYMMDDHH24MMSS(
          element.publishedParsed
        );
        const item: ItemElementInterface = {
          alt: "alt",
          src: src,
          domainName: domainName,
          date: date,
          url: url,
          itemName: itemName
        };
        this.saveItems.push(item);
      });
    });

    this.items = this.saveItems;
    this.saveItems = [];
    this.isLoading = false;
    this.updateTime = DayFormatter.HH24MMSS();
  }

  @action.bound
  async setTimer() {
    if (this.timerId != undefined) {
      clearInterval(this.timerId);
    }

    // 初回呼び出し
    await this.fetchItems();
    this.timerId = setInterval(
      this.fetchItems,
      this.updateDuration * 60 * 1000
    );
  }
}

export default ItemStore;
