import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface OrderState {
  order: Order[];
}

const initialState: OrderState = {
  order: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.order.push(action.payload);
    },
    clearOrder: (state) => {
      state.order = [];
    },
  },
});

export const { addOrder, clearOrder } = orderSlice.actions;

export const selectTotalQuantity = createSelector(
  (state: { order: OrderState }) => state.order.order,
  (orders) => orders.reduce((total, order) => total + order.quantity, 0)
);

export const selectTotalPrice = createSelector(
  (state: { order: OrderState }) => state.order.order,
  (orders) => orders.reduce((total, order) => total + order.price, 0)
);

export default orderSlice.reducer;
