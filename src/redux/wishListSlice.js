import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: { wishlist: [] },
  reducers: {
    wishlistAdd: (state, action) => {
      const itemPresent = state.wishlist.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.wishlist.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromwishlist: (state, action) => {
      const removeItem = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      state.wishlist = removeItem;
    },
  },
});
export const { wishlistAdd, removeFromwishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
