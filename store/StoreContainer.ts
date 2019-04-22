import ItemStore from "./ItemStore";

export interface StoreContainerInterface {
  ItemStore: ItemStore;
}

export const getInstance = () => {
  const container: StoreContainerInterface = {
    ItemStore: new ItemStore()
  };
  return container;
};
