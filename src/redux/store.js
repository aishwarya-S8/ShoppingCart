import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/CartSlice";
import wishlistReducer from "./wishListSlice";

const reducer = {
  cart: cartReducer,
  wishlist: wishlistReducer,
};
export default configureStore({ reducer });
