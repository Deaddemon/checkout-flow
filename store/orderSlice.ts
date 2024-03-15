import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderDetails } from "../api/api";
export const fetchOrders = createAsyncThunk(
  "order/getAllOrders",


    async (thunkApi) => {
        
            const response = await fetchOrderDetails();
            console.log("orderSlice.ts -> response", response.products);
            return response.products;
         
    }

);

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }



export interface OrderState {
  loading: boolean;
  error: string | null;  
  products : Product[];
}

const initialState: OrderState = {
    loading: false,
    error: null,
    products: []
};
 

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.products = action.payload;
        }
      });
  
      builder.addCase(fetchOrders.pending, (state, action) => {
        state.loading = true;
      });
    },
  });

export default orderSlice.reducer;