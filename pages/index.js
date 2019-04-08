import React, { Component } from "react";
import "./index.css";
import Header from "../components/Header/Header";
import Side from "../components/Side/Side";
import Main from "../components/Main/Main";
// import PullToReflesh from "../utils/PullToReflesh";

const Index = () => {
  return (
    <div className="Index">
      <Side />
      <Header />
      <Main />
    </div>
  );
};

// class Index extends Component {
//   componentDidMount() {
//     PullToReflesh();
//   }
//   render() {
//     return (
//       <div className="Index">
//         <Side />
//         <Header />
//         <Main />
//       </div>
//     );
//   }
// }

export default Index;
