import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false },
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modelSlice.actions;

export default modelSlice.reducer;
