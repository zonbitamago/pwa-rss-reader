import React, { useEffect } from "react";
import "./index.css";
import Header from "../components/Header/Header";
import Side from "../components/Side/Side";
import Main from "../components/Main/Main";
import * as StoreContainer from "../store/StoreContainer";

const store = StoreContainer.getInstance();

const Index = () => {
  useEffect(() => {
    store.ItemStore.setTimer();
  });
  return (
    <div className="Index">
      <Side store={store} />
      <Header store={store} />
      <Main store={store} />
    </div>
  );
};

export default Index;
