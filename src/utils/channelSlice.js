import { createSlice } from "@reduxjs/toolkit";

const channelSlice = createSlice({
    name: "channel",
    initialState: {
        channelData: [],
    },
    reducers: {
        setChannelData: (state, action) => {
            state.channelData = action?.payload
        }
    },
});

export const { setChannelData } = channelSlice.actions;
export default channelSlice.reducer