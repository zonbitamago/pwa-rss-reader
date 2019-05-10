import { action, observable } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import * as DayFormatter from "../utils/DayFormatter";
import * as LocalStorageManager from "../utils/LocalStorageManager";
import * as ArrayUtils from "../utils/ArrayUtils";

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
  @observable public hasUpdate: boolean = false;
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

    const promiseList = ArrayUtils.splitArrayGroups(feedList, 5).map(groups => {
      const urls = groups.map(elem => {
        return elem.url;
      });

      return FetchRssFeed(urls);
    });

    return Promise.all(promiseList).then(groups => {
      groups.forEach(json => {
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
                ? element.publishedParsed
                : element.updatedParsed
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
      });

      this.sortSaveItems();

      // this.items = this.saveItems;
      // this.saveItems = [];
      this.updateTime = DayFormatter.HH24MMSS();
      this.hasUpdate = this.isDiffItems();
      this.isLoading = false;
    });
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

  sortSaveItems() {
    this.saveItems = this.saveItems.slice().sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }

      // names must be equal
      return 0;
    });
  }

  @action.bound
  updateItems() {
    this.items = this.saveItems;
    this.hasUpdate = this.isDiffItems();
  }

  isDiffItems() {
    return this.items !== this.saveItems;
  }
}

export default ItemStore;
