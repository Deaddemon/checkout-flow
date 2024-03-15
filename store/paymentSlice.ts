import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchOrderDetails } from "../api/api";
export const fetchPaymentMethods = createAsyncThunk(
    "payment/getPaymentMethods",

    async (thunkApi) => {

        const response = await fetchOrderDetails();
        console.log("paymentSlice.ts -> response", response.paymentMethods);
        return response.paymentMethods;

    }

);

export interface PaymentState {
    loading: boolean;
    error: string | null;
    paymentMethods: string[];
    selectedMethod: string | null;
}

const initialState: PaymentState = {
    loading: false,
    error: null,
    paymentMethods: [],
    selectedMethod: null,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        selectPaymentMethod(state, action) {
            state.selectedMethod = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPaymentMethods.fulfilled, (state, action) => {
            state.loading = false;
            if (action.payload) {
                state.paymentMethods = action.payload;
            }
        });

        builder.addCase(fetchPaymentMethods.pending, (state, action) => {
            state.loading = true;
        });
    },
});

export const { selectPaymentMethod } = paymentSlice.actions;

export default paymentSlice.reducer;
