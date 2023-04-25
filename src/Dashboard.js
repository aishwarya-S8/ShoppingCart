import React from "react";
import Header from "./components/Header";
import "../src/App.css";
import BottomHeader from "./components/BottomHeader";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./redux/store";
import CarouselComponent from "./components/CarouselComponent";
const Dashboard = () => {
  return (
    <>
      <Provider store={store}>
        <div className="fontLink">
          SHOPZY
          <Header />
        </div>
        <BottomHeader />
        <CarouselComponent />
        <Body />
      </Provider>
    </>
  );
};

export default Dashboard;
