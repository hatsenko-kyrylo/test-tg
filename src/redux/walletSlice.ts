import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WalletState {
    address: string | null;
}

const initialState: WalletState = {
    address: null,
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        connectWallet: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        disconnectWallet: (state) => {
            state.address = null;
        },
    },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;
