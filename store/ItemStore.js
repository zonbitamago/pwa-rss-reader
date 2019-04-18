import { action, observable } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import dayjs from "dayjs";

class ItemStore {
  @observable updateDuration = 5;
  @observable items = [];

  @action.bound
  setUpdateDuration(updateDuration) {
    this.updateDuration = updateDuration;
  }

  @action.bound
  async fetchItems() {
    const urls = ["https://feedforall.com/sample-feed.xml"];
    const json = await FetchRssFeed(urls);
    json.results.forEach(node => {
      const src =
        "https://www.google.com/s2/favicons?domain=" +
        node.feed.link.split("//")[1];

      node.feed.items.forEach(element => {
        const itemName = element.title;
        const url = element.link;
        const date = dayjs(element.publishedParsed).format("YYYY/MM/DD");
        const item = {
          alt: "alt",
          src: src,
          domainName: "Qiita",
          date: date,
          url: url,
          itemName: itemName
        };
        this.items.push(item);
      });
    });
  }
}

export default ItemStore;
