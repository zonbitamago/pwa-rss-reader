import ItemStore from "./ItemStore";
import FeedListStore from "./FeedListStore";
import FirebaseStore from "./FirebaseStore";

export interface StoreContainerInterface {
  ItemStore: ItemStore;
  FeedListStore: FeedListStore;
  FIrebaseStore: FirebaseStore;
}

export const getInstance = () => {
  const container: StoreContainerInterface = {
    ItemStore: new ItemStore(),
    FeedListStore: new FeedListStore(),
    FIrebaseStore: new FirebaseStore()
  };
  return container;
};
