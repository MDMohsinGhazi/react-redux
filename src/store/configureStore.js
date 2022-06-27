import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import modalreducer from "./modal";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalreducer,
  },
});
