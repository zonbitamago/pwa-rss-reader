import { observable, action } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import * as LocalStorageManager from "../utils/LocalStorageManager";
import DuplicationFeedURLError from "../error/DuplicationFeedURLError";
import InvalidFeedURLException from "../error/InvalidFeedURLException";

class FeedListStore {
  @observable public feedList: LocalStorageManager.feedListElement[] = [];
  @observable public name: string = "";
  @observable public url: string = "";

  @action.bound
  getFeedList() {
    this.feedList = LocalStorageManager.getFeedList();
  }

  @action.bound
  async setFeedList() {
    const isDuplicated = this.feedList.some(elem => {
      return elem.url === this.url;
    });

    if (isDuplicated) {
      throw new DuplicationFeedURLError();
    }

    const json = await FetchRssFeed([this.url]);

    if (!json.results[0].result) {
      throw new InvalidFeedURLException();
    }

    json.results.forEach(() => {
      const feedListElement: LocalStorageManager.feedListElement = {
        name: this.name,
        url: this.url
      };

      this.feedList.push(feedListElement);

      LocalStorageManager.setLocalStorage(this.feedList);
    });
  }

  @action.bound
  deleteFeedList(name: string) {
    this.feedList = this.feedList.filter(elem => {
      return elem.name != name;
    });

    LocalStorageManager.setLocalStorage(this.feedList);
  }
}

export default FeedListStore;
