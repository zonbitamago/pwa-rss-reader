import * as Constants from "./Constants";

export interface feedListElement {
  name: string;
  url: string;
}

export const getFeedList = () => {
  const storageFeedList = localStorage.getItem(Constants.FEED_LIST_KEY);
  if (storageFeedList == null) {
    return [];
  }

  const feedList: feedListElement[] = JSON.parse(storageFeedList);

  return feedList;
};

export const setLocalStorage = (feedList: feedListElement[]) => {
  localStorage.setItem(Constants.FEED_LIST_KEY, JSON.stringify(feedList));
};
