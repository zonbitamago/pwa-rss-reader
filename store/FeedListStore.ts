import { observable, action } from "mobx";
import FetchRssFeed from "../utils/FetchRssFeed";

interface feedListElement {
  name: string;
  url: string;
}

class FeedListStore {
  @observable public feedList: feedListElement[] = [];
  @observable public name: string = "";
  @observable public url: string = "";

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

        localStorage.setItem("feedList", JSON.stringify(this.feedList));
      }
    });
  }
}

export default FeedListStore;
