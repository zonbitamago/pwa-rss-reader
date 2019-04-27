import { observable, action } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";
import * as Constants from "../utils/Constants";

interface feedListElement {
  name: string;
  url: string;
}

class FeedListStore {
  @observable public feedList: feedListElement[] = [];
  @observable public name: string = "";
  @observable public url: string = "";

  @action.bound
  getFeedList() {
    const storageFeedList = localStorage.getItem(Constants.FEED_LIST_KEY);
    if (storageFeedList == null) {
      this.feedList = [];
      return;
    }

    this.feedList = JSON.parse(storageFeedList);
  }

  @action.bound
  async setFeedList() {
    const json = await FetchRssFeed([this.url]);

    json.results.forEach(element => {
      if (element.result) {
        const feedListElement: feedListElement = {
          name: this.name,
          url: this.url
        };

        this.feedList.push(feedListElement);

        localStorage.setItem(
          Constants.FEED_LIST_KEY,
          JSON.stringify(this.feedList)
        );
      }
    });
  }
}

export default FeedListStore;
