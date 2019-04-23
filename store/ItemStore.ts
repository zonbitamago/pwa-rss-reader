import { action, observable } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import dayjs from "dayjs";

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

  @action.bound
  setUpdateDuration(updateDuration: number): void {
    this.updateDuration = updateDuration;
  }

  @action.bound
  async fetchItems(): Promise<void> {
    this.isLoading = true;

    const urls: string[] = ["https://feedforall.com/sample-feed.xml"];
    const json = await FetchRssFeed(urls);
    json.results.forEach(node => {
      const src: string =
        "https://www.google.com/s2/favicons?domain=" +
        node.feed.link.split("//")[1];

      node.feed.items.forEach(element => {
        const itemName: string = element.title;
        const url: string = element.link;
        const date: string = dayjs(element.publishedParsed).format(
          "YYYY/MM/DD HH:mm:ss"
        );
        const item: ItemElementInterface = {
          alt: "alt",
          src: src,
          domainName: "Qiita",
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
  }
}

export default ItemStore;
