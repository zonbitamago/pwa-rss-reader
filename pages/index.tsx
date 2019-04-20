import React from "react";
import "./index.css";
import Header from "../components/Header/Header";
import Side from "../components/Side/Side";
import Main from "../components/Main/Main";

const Index = () => {
  return (
    <div className="Index">
      <Side />
      <Header />
      <Main />
    </div>
  );
};

export default Index;
