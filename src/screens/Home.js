import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Header from "../components/Header";
import BottomHeader from "../components/BottomHeader";
import Cart from "./Cart";

const Home = () => {
  return (
    <>
      <Provider store={store}>
        <div className="fontLink">
          SHOPZY
          <Header />
        </div>
        <BottomHeader />
        <Cart />
      </Provider>
    </>
  );
};

export default Home;
