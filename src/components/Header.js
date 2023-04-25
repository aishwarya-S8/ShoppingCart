import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import "../App.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchItem from "./SearchItem";
import { Route } from "react-router-dom";

const Header = ({ history }) => {
  const cart = useSelector((state) => state.cart.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  const navigateToWishlist = () => {
    navigate("/wishlist");
  };

  return (
    <>
      <div className="header">
        {" "}
        {/* <Route render={({ history }) => <SearchItem history={history} />} /> */}
        <SearchItem />
        <div
          className="likeBtn"
          onClick={navigateToWishlist}
          style={{
            position: "relative",
            paddingLeft: "160%",
            cursor: "pointer",
          }}
        >
          <AiOutlineHeart size="30" />
          <span className="cartStyle">{wishlist.length}</span>
        </div>
        <div
          onClick={navigateToCart}
          style={{ position: "relative", marginLeft: 20, cursor: "pointer" }}
        >
          <AiOutlineShoppingCart size="30" />
          <span className="cartStyle">{cart.length}</span>
        </div>
      </div>
    </>
  );
};

export default Header;
