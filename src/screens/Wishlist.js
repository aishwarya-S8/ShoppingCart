import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwishlist } from "../redux/wishListSlice";
import { addToCart } from "../redux/CartSlice";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const removeItemWishlist = (item) => {
    dispatch(removeFromwishlist(item));
  };
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };
  return (
    <div className="cartLeft">
      {wishlist.map((item, index) => (
        <div className="cartContainer">
          {/* image */}
          <div>
            <img src={item.image} style={{ width: 100, height: 100 }} />
          </div>
          {/* description */}
          <div className="cartDescription">
            <p>
              {item.title.length > 60 ? item.title.substr(0, 60) : item.title}
            </p>
            <p>
              {item.description.length > 80
                ? item.description.substr(0, 80)
                : item.description}
            </p>
            <p>{item.price}</p>
          </div>
          {/* button */}
          <div className="cartButtonContainer">
            <button
              className="cartButton"
              onClick={() => removeItemWishlist(item)}
            >
              Remove item
            </button>
            <button className="cartButton" onClick={() => addItemToCart(item)}>
              Add to cart
            </button>
            <h5 style={{ marginTop: 7, fontWeight: "bold" }}>{item.price}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
