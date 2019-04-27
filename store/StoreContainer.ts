import ItemStore from "./ItemStore";
import FeedListStore from "./FeedListStore";

export interface StoreContainerInterface {
  ItemStore: ItemStore;
  FeedListStore: FeedListStore;
}

export const getInstance = () => {
  const container: StoreContainerInterface = {
    ItemStore: new ItemStore(),
    FeedListStore: new FeedListStore()
  };
  return container;
};
