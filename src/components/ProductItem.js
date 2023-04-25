import React from "react";
import "./ProductItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";
import { useState } from "react";
import { wishlistAdd } from "../redux/wishListSlice";

const ProductItem = ({ item }) => {
  const [cartDec, setDec] = useState([]);
  const [cartWishlist, setWlist] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const RemoveItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const wishlistItem = (item) => {
    dispatch(wishlistAdd(item));
  };

  return (
    <div className="productItems">
      <img
        style={{
          width: 200,
          height: 200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={item.image}
      ></img>
      <p>{item.title.length > 30 ? item.title.substr(0, 30) : item.title}</p>
      <p>
        {item.description.length > 60
          ? item.description.substr(0, 60)
          : item.description}
      </p>
      <p>{item.price}</p>
      {/* Add to cart button */}

      {cart.some((x) => x.id === item.id) ? (
        <button
          className="productItemButton"
          onClick={() => RemoveItemFromCart(item)}
        >
          Remove from cart{" "}
        </button>
      ) : (
        <button
          className="productItemButton"
          onClick={() => addItemToCart(item)}
        >
          Add to cart{" "}
        </button>
      )}

      <button
        className="productItemBuy"
        onClick={() => {
          wishlistItem(item);
        }}
      >
        Add to wishlist{" "}
      </button>
    </div>
  );
};

export default ProductItem;
